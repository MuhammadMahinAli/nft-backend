import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Product} from "../product.model.js";

//add product owner
export const addProductOwnerService = async (id, owner, session) => {
  const isExist = await Product.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product doesn't found");
  }

  const updatedProduct = await Product.findOneAndUpdate(
    {_id: id},
    {$push: {owners: owner}},
    {
      new: true,
    }
  ).session();
  //if not update throw an error
  if (!updatedProduct) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add owner");
  }

  return updatedProduct;
};
