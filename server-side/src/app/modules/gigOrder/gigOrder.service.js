import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {GigOrder} from "./gigOrder.model.js";
import Stripe from "stripe";
import mongoose from "mongoose";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
//add gig order
export const addGigOrderService = async (payload) => {
  const result = await GigOrder.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig order");
  }

  return result;
};

//get all order by user
export const getAllGigOrderService = async (designer) => {
  const orders = await GigOrder.find({designer}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get all order by buyer
export const getGigOrderByBuyerService = async (buyer) => {
  const orders = await GigOrder.find({buyer}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get all order by buyer
export const getGigOrderByStatusService = async (id, status) => {
  const orders = await GigOrder.find({designer: id, status: status}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//get single order
export const getSingleGigOrderService = async (id) => {
  const orders = await GigOrder.find({_id: id}).populate("gig").populate("buyer").populate("designer");
  return orders;
};
//update status
export const updateGigOrderStatusService = async (payload) => {
  const result = await GigOrder.findOneAndUpdate({_id: payload?.id}, {status: payload?.status}, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig order status");
  }

  return result;
};
//delete  order
export const deleteGigOrderService = async (id) => {
  const res = await GigOrder.findOneAndDelete({_id: id});
  return res;
};

//make payment service
export const makePaymentService = async (products) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product?.serviceType,
          images: [product?.gig?.images[0]],
        },
        unit_amount: product?.price * 100,
      },
      quantity: 1,
    }));

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://www.nftclosetx.com/gig-payment/success",
      cancel_url: "https://www.nftclosetx.com/gig-payment/error",
    });
    if (stripeSession?.id) {
      const result = await GigOrder.findOneAndUpdate({_id: products[0]?._id}, {payment: "Paid"}, {new: true}).session(session);
      if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig order payment");
      }
    }
    await session.commitTransaction();
    await session.endSession();
    return stripeSession?.id;
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    await session.endSession();
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment can't be done");
  }
};
