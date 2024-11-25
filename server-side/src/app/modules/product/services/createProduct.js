import mongoose from "mongoose";
import {generateProductID} from "../product.utils.js";
import {addProductToDifferentVersions, generateVersionProperty} from "../../version/version.utils.js";
import {Product} from "../product.model.js";
import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {addProductToCollections} from "../../collection/collection.utils.js";
import {createArtistService} from "../../artist/artist.service.js";
import {MintNFT} from "../../mintNFT/mintNFT.model.js";

//------create a new product
export const createProductService = async (body) => {
  const {payload, versions: bodyVersions, artist, nft} = body;
  let newProductData = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const productID = await generateProductID();
    //generate how versions property added to product
    const versions = generateVersionProperty(bodyVersions);
    let data;
    if (payload?.collections?.collectionID) {
      data = {productID, versions, ...payload};
    } else {
      const {collections, ...others} = payload;
      data = {productID, versions, ...others};
    }
    const newProduct = await Product.create([data], {session});
    if (!newProduct?.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create product");
    }
    //make this nft listed
    const existingNFT = await MintNFT.findOne({_id: nft});
    if (!existingNFT) {
      throw new ApiError(httpStatus.NOT_FOUND, "NFT doesn't found");
    }
    existingNFT.listed = true;
    existingNFT.save({session});
    //adding this product to its collection
    const newProductId = newProduct[0]?._id;
    if (payload?.collections?.collectionID) {
      await addProductToCollections(payload?.collections, newProductId, session);
    }
    //adding this product to the versions
    await addProductToDifferentVersions(newProductId, bodyVersions, session);
    newProductData = newProduct[0];
    //creating artist of this product
    if (artist && artist.name !== "") {
      const newArtist = await createArtistService({product: newProductId, ...artist});
      // newProductData = newProduct[0];
      //setting artist to product
      newProductData.artist = newArtist?._id;
      await newProductData.save({session});
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return newProductData;
};
