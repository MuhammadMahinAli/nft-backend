import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Product} from "../product.model.js";

//update product
export const updateProductService = async (id, payload) => {
  const isExist = await Product.findOne({productID: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product doesn't found");
  }
  const {collectionName, ...data} = payload;

  const updatedProductData = {...data};
  //updated nested field collection
  if (collectionName && Object.keys(collectionName).length > 0) {
    Object.keys(collectionName).forEach((key) => {
      const collectionKey = `collectionName.${key}`;
      updatedProductData[collectionKey] = collectionName[key];
    });
  }

  const result = await Product.findOneAndUpdate({productID: id}, updatedProductData, {
    new: true,
  });
  return result;
};
