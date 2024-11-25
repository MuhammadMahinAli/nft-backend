import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Recycle} from "./recycle.model.js";
import {Product} from "../product/product.model.js";

//-----create a recycle by adding product
export const createRecycleService = async (payload) => {
  const exist = await Recycle.findOne({requestedBy: payload.requestedBy, productID: payload.productID});
  if (exist) {
    exist.totalRequested++;
    exist.save();
    return exist;
  }
  const results = await Recycle.create(payload);
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Recycle request can't be done");
  }
  const product = await Product.findOne({_id: payload?.productID});
  product.requestRecycle = true;
  await product.save();
  return results;
};

//----------delete recycle
export const deleteRecycleService = async (payload) => {
  const result = await Recycle.findOneAndDelete({requestedBy: payload.requestedBy, productID: payload.productID});

  if (result) {
    const product = await Product.findOne({_id: payload?.productID});
    product.requestRecycle = false;
    await product.save();
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, "Recycle request can't be deleted");
  }
  return result;
};
//----------get all recycle
export const getAllRecycleService = async () => {
  const recycles = await Recycle.find({}).populate({
    path: "productID",
  });
  return recycles;
};
//----------get single recycle
export const getSingleRecycleService = async (payload) => {
  const recycle = await Recycle.findOne({requestedBy: payload.requestedBy, productID: payload.productID}).populate({
    path: "productID",
  });
  return recycle;
};
//update status
export const updateRecycleStatusService = async (payload) => {
  const exist = await Recycle.findOne({requestedBy: payload.requestedBy, productID: payload.productID});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Recycle request doesn't found");
  }
  exist.status = payload.status;

  if (payload.status === "done") {
    exist.reprintProductImg = payload?.image;
    exist.reprintPrice = payload?.price;
    const product = await Product.findOne({_id: payload?.productID});
    product.requestRecycle = false;
    await product.save();
  }
  await exist.save();
  return exist;
};

export const reprintProductService = async (payload) => {
  const exist = await Recycle.findOne({requestedBy: payload.requestedBy, productID: payload.productID});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Recycle request doesn't found");
  }
  exist.totalReprinted++;
  await exist.save();
  return exist;
};
