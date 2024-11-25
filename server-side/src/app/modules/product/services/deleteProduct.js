import mongoose from "mongoose";
import { Product } from "../product.model.js";
import { ApiError } from "../../../../handleError/apiError.js";
import httpStatus from "http-status";
import { deleteProductFromDifferentVersions } from "../../version/version.utils.js";
import { deleteProductFromCollections } from "../../collection/collection.utils.js";

//-----delete a  product
export const deleteProductService = async (id) => {
  let deletedProduct = null;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const product = await Product.findOneAndDelete({ _id: id }).session(
      session
    );
    if (!product) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete product");
    }
    //deleting this product from its collections
    await deleteProductFromCollections(product?.collections, id, session);
    //deleting this product from the versions
    await deleteProductFromDifferentVersions(id, product?.versions, session);
    deletedProduct = product;
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return deletedProduct;
};
