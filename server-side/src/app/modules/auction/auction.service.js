import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Auction} from "./auction.model.js";
import {Product} from "../product/product.model.js";

//-------create new auction
export const createAuctionService = async (data) => {
  const newAuction = await Auction.create(data);
  if (!newAuction) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Unable to create Auction!");
  }

  const product = await Product.findOne({_id: data?.product});
  product.onAuction = true;
  await product.save();

  return newAuction;
};

//--------add bidders to auction
export const addBidderToAuctionService = async (id, bidder) => {
  const isExist = await Auction.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Auction doesn't found");
  }

  const results = await Auction.findOneAndUpdate(
    {_id: id},
    {$push: {bidders: bidder}},
    {
      new: true,
    }
  );
  //if not update throw an error
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add bidder to Auction");
  }
  return results;
};
//---------delete Auction
export const deleteAuctionService = async (id) => {
  const result = await Auction.findOneAndDelete({_id: id});
  return result;
};
