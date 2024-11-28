import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Cart} from "./cart.model.js";

//----------create a new cart
export const createCartService = async (payload) => {
  //checking if cart is exist or not
  const cart = await Cart.findOne({user: payload.user});
  if (cart) {
    throw new ApiError(httpStatus.CONFLICT, "This cart is already exist");
  }
  const newCart = await Cart.create(payload);
  if (!newCart) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create cart");
  }
  return newCart;
};

//-----------get single cart
export const getSingleCartService = async (id) => {
  const cart = await Cart.findOne({user: id});
  return cart;
};

//---------add product to cart
export const addProductToCartService = async (user, product) => {
  //checking cart exist
  const existingCart = await Cart.findOne({user: user});
  if (!existingCart) {
    throw new ApiError(httpStatus.NOT_FOUND, "Cart doesn't found");
  }
  //checking product exist
  const productExist = existingCart.products?.find((product) => product.productID.toString() === product.productID.toString());
  let result = null;
  if (productExist) {
    const newQuantity = productExist.quantity + product.quantity;
    result = await Cart.findOneAndUpdate(
      {
        user: user,
        "products.productID": product.productID,
      },
      {
        $set: {"products.$.quantity": newQuantity},
      },
      {new: true}
    );
  } else {
    result = await Cart.findOneAndUpdate(
      {user: user},
      {$push: {products: product}},
      {
        new: true,
      }
    );
  }
  //if not update throw an error
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add product to Cart");
  }
  return result;
};
//---------delete product from cart
export const deleteProductFromCartService = async (user, productID) => {
  const isExist = await Cart.findOne({user: user});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "cart doesn't found");
  }

  const result = await Cart.findOneAndUpdate(
    {user: user},
    {$pull: {products: {productID: productID}}},
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't delete product from cart");
  }

  return result;
};

//---------delete cart
export const deleteCartService = async (id) => {
  const result = await Cart.findOneAndDelete({user: id});
  return result;
};

//----------increase or decrease product quantity from cart

export const handleQuantityService = async (user, productID, operation) => {
  let result = null;
  if (operation === "plus") {
    result = await Cart.findOneAndUpdate(
      {user, "products.productID": productID},

      {
        $inc: {"products.$.quantity": 1},
      },
      {new: true}
    );
  } else {
    result = await Cart.findOneAndUpdate({user, "products.productID": productID}, {$inc: {"products.$.quantity": -1}}, {new: true});
  }
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't update product quantity in cart");
  }

  return result;
};
