import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Artist} from "../../artist/artist.model.js";
import {Product} from "../product.model.js";

export const rejectCertificationService = async (payload) => {
  const product = await Product.findOne({_id: payload.product});
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product doesn't exist!");
  }
  const artist = await Artist.findOne({_id: payload.artist});
  if (!artist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Artist doesn't exist!");
  }
  product.certificateReq = "rejected";
  product.certified = false;
  await product.save({});
  return product;
};
