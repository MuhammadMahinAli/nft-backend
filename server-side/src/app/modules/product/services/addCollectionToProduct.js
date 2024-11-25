import httpStatus from "http-status";
import {Product} from "../product.model.js";
import {ApiError} from "../../../../handleError/apiError.js";

export const addCollectionToProductService = async (payload) => {
  const isExist = await Product.findOne({_id: payload?.product});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product doesn't found");
  }
  const result = await Product.findOneAndUpdate(
    {_id: payload?.product},
    {$push: {collections: payload?.collection}},
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add collection to product");
  }
};
