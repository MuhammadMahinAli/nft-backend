import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Product} from "../product.model.js";
import {Artist} from "../../artist/artist.model.js";
import mongoose from "mongoose";

export const certifyProductService = async (payload) => {
  const product = await Product.findOne({_id: payload.product});
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product doesn't exist!");
  }
  const artist = await Artist.findOne({_id: payload.artist});
  if (!artist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Artist doesn't exist!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //generating pdf of certificate
    // await generatePDF({name: `${artist?.name}`, itemName: product?.title});
    // const base64Pdf = readFileSync("certificate/certificate.pdf", {encoding: "base64"});
    //updating product
    product.certificateReq = "approved";
    product.certified = true;
    await product.save({session});
    //updating artist
    // artist.certificate = base64Pdf;
    await artist.save({session});
    //sending mail to the artist
    // const mailOptions = generateMailOptions({name: `${artist?.name}`, email: "isratkws@gmail.com"});
    // await transporter.sendMail(mailOptions);
    // //deleting pdf after send to artist
    // unlinkSync("certificate/certificate.pdf");
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return product;
};
