import httpStatus from "http-status";
import {Version} from "./version.model.js";
import {generateVersionID} from "./version.utils.js";
import {ApiError} from "../../../handleError/apiError.js";
import mongoose from "mongoose";

//-------create a new version
export const createVersionService = async (payload) => {
  const versionID = await generateVersionID();
  const data = {versionID, ...payload};
  const newVersion = await Version.create(data);
  if (!newVersion) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create version");
  }
  return newVersion;
};

//--------add product to version

export const addProductToVersionService = async (id, product, session) => {
  const isExist = await Version.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Version doesn't found");
  }
  const result = await Version.findOneAndUpdate(
    {_id: id},
    {$push: {products: product}},
    {
      new: true,
    }
  ).session(session);
  //throw error if not update
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add product to version");
  }
  return result;
};
//-----delete product from versions
export const deleteProductFromVersionService = async (id, productID, session) => {
  const isExist = await Version.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Version doesn't found");
  }
  const result = await Version.findOneAndUpdate(
    {_id: id},
    {$pull: {products: {productID: productID}}},
    {
      new: true,
    }
  ).session(session);
  //throw error if not update
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't delete product from version");
  }
  return result;
};

//get products by version
export const getProductsByVersionService = async (id) => {
  const version = await Version.findOne(
    {
      versionID: id,
    },

    {products: 1, _id: 0}
  ).populate({
    path: "products.productID",
  });
  return version?.products;
};
export const getSingleVersionService = async (title) => {
  const version = await Version.findOne({title});
  return version;
};
