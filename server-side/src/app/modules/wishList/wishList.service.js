import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {WishList} from "./wishList.model.js";

//-----create a wishlist by adding product
export const addProductToWishListService = async (payload) => {
  const wishList = await WishList.findOne({user: payload?.user});
  let results = null;
  if (wishList) {
    results = await WishList.findOneAndUpdate(
      {user: payload?.user},
      {$push: {products: payload?.product}},
      {
        new: true,
      }
    );
  } else {
    //if not exist then create a wishlist
    const data = {user: payload?.user, products: [payload?.product]};
    results = await WishList.create(data);
  }
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Recycle request can't be done");
  }
  return results;
};

//-----delete product from wishlist
export const deleteProductFromWishListService = async (payload) => {
  const wishList = await WishList.findOne({user: payload?.user});
  if (!wishList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Wishlist doesn't found");
  }
  const results = await WishList.findOneAndUpdate(
    {user: payload?.user},
    {$pull: {products: payload?.product}},
    {
      new: true,
    }
  );
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product couldn't be delete from wishlist");
  }
  return results;
};

//----------delete wishlist
export const deleteWishlistService = async (id) => {
  const result = await WishList.findOneAndDelete({user: id});
  return result;
};

//----------get single wishlist
export const getSingleWishListService = async (id) => {
  const wishList = await WishList.findOne({user: id});
  return wishList;
};
