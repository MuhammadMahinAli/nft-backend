import httpStatus from "http-status";
import {sendResponse} from "../../../utils/sendResponse.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {addProductToCartService, createCartService, deleteCartService, deleteProductFromCartService, getSingleCartService, handleQuantityService} from "./cart.service.js";

//-------create a cart
export const createCart = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newCart = await createCartService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart created successfully!",
    data: newCart,
  });
});

//------get single cart
export const getSingleCart = catchAsync(async (req, res) => {
  const id = req.params.id;
  const cart = await getSingleCartService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "cart retrieved successfully!",
    data: cart,
  });
});
//-------add or delete product to cart
export const addOrDeleteProductToCart = catchAsync(async (req, res) => {
  const {user, product, add} = req?.body;
  let result = null;
  if (add) {
    result = await addProductToCartService(user, product);
  } else {
    result = await deleteProductFromCartService(user, product);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart updated successfully!",
    data: result,
  });
});

//---------delete cart
export const deleteCart = catchAsync(async (req, res) => {
  const id = req.params.id;

  const cart = await deleteCartService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "cart deleted successfully!",
    data: cart,
  });
});

//--------increase or decrease quantity
export const handleQuantity = catchAsync(async (req, res) => {
  const {user, productID, operation} = req?.body;

  const result = await handleQuantityService(user, productID, operation);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart updated successfully!",
    data: result,
  });
});
