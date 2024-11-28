import httpStatus from "http-status";
import {MintNFT} from "./mintNFT.model.js";
import {addProductOwnerService} from "../product/services/addProductOwner.js";
import {addOwnerToCollectionService} from "../collection/collection.service.js";
import {ApiError} from "../../../handleError/apiError.js";
import {generateMailOptions, transporter} from "../../../utils/mailer.js";
import mongoose from "mongoose";
import {generatePDF} from "../../../utils/generatePDF.js";
import {unlinkSync, readFileSync} from "fs";
import {Product} from "../product/product.model.js";
import {Collection} from "../collection/collection.model.js";

//-------------mint an NFT
export const createMintNFTService = async (data) => {
  const session = await mongoose.startSession();
  let result = null;
  let item = null;
  try {
    session.startTransaction();
    const newMintedNFT = await MintNFT.create([data], {session});
    if (!newMintedNFT.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "unable minting the NFT");
    }

    //adding owner to product or collection
    if (data?.itemType === "product") {
      item = await Product.findOne({_id: data.item});
      //adding owner to product
      await addProductOwnerService(data.item, data.artistsession, session);
    } else {
      item = await Collection.findOne({_id: data.item});
      //adding owner to collection
      await addOwnerToCollectionService(data.item, data.artist, session);
    }
    result = newMintedNFT[0];
    //creating certificate if need this
    if (data.certified) {
      //generating pdf of certificate
      await generatePDF({name: data?.artistName, itemName: item?.title});
      const base64Pdf = readFileSync("certificate/certificate.pdf", {encoding: "base64"});
      result.certificate = base64Pdf;
      await result.save({session});
      //sending mail to the artist
      const mailOptions = generateMailOptions({name: data?.artistName, email: "isratkws@gmail.com"});
      await transporter.sendMail(mailOptions);
      //deleting pdf after send to artist
      unlinkSync("certificate/certificate.pdf");
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return result;
};
