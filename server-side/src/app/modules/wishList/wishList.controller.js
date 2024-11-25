import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addProductToWishListService, deleteProductFromWishListService, deleteWishlistService, getSingleWishListService} from "./wishList.service.js";

//-------add or delete product to wishlist
export const addOrDeleteProductToWishList = catchAsync(async (req, res, next) => {
  const data = req?.body;
  let wishList = null;
  if (data?.add) {
    wishList = await addProductToWishListService(data);
  } else {
    wishList = await deleteProductFromWishListService(data);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " products of wishlist updated successfully!",
    data: wishList,
  });
});

//-------delete wishlist
export const deleteWishlist = catchAsync(async (req, res, next) => {
  const id = req?.params?.id;
  const wishList = await deleteWishlistService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "wishlist deleted successfully!",
    data: wishList,
  });
});
//-------get single wishlist
export const getSingleWishlist = catchAsync(async (req, res, next) => {
  const id = req?.params?.id;
  const wishList = await getSingleWishListService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "wishList retrived successfully!",
    data: wishList,
  });
});
