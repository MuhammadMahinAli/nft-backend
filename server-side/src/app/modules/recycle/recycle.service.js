import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Recycle} from "./recycle.model.js";
import {Product} from "../product/product.model.js";
import mongoose from "mongoose";

//-----create a recycle by adding product
export const addProductToRecycleService = async (payload) => {
  const recycle = await Recycle.findOne({requestedBy: payload?.requestedBy});
  let results = null;
  if (recycle) {
    results = await Recycle.findOneAndUpdate(
      {requestedBy: payload?.requestedBy},
      {$push: {products: {productID: payload?.product}}},
      {
        new: true,
      }
    );
  } else {
    const data = {requestedBy: payload?.requestedBy, products: [{productID: payload?.product}]};
    results = await Recycle.create(data);
  }
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Recycle request can't be done");
  } else {
    const product = await Product.findOne({_id: payload.product});
    product.requestRecycle = true;
    await product.save();
  }
  return results;
};

//-----delete product from recycle
export const deleteProductFromRecycleService = async (payload) => {
  const recycle = await Recycle.findOne({requestedBy: payload?.requestedBy});
  if (!recycle) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Recycle doesn't found");
  }
  const results = await Recycle.findOneAndUpdate(
    {requestedBy: payload?.requestedBy},
    {$pull: {products: {productID: payload?.product}}},
    {
      new: true,
    }
  );
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product couldn't be delete from Recycle");
  } else {
    const product = await Product.findOne({_id: payload.product});
    product.requestRecycle = false;
    await product.save();
  }
  return results;
};

//----------delete recycle
export const deleteRecycleService = async (id) => {
  const result = await Recycle.findByIdAndDelete({requestedBy: id});
  return result;
};
//----------get all recycle
export const getAllRecycleService = async () => {
  const recycles = await Recycle.find({});
  return recycles;
};
//----------get single recycle
export const getSingleRecycleService = async (id) => {
  const recycle = await Recycle.findOne({requestedBy: id});
  return recycle;
};
