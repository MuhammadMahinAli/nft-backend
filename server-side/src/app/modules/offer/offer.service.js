import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Offer} from "./offer.model.js";
import {Product} from "../product/product.model.js";
import {Collection} from "../collection/collection.model.js";

//-------create new offer
export const createOfferService = async (data) => {
  const newOffer = await Offer.create(data);
  if (!newOffer) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Unable to create offer!");
  }
  if (data?.offerBasedOn === "product") {
    const product = await Product.findOne({_id: data?.item});
    product.hasOffers = true;
    await product.save();
  } else if (data?.offerBasedOn === "collection") {
    const collection = await Collection.findOne({_id: data?.item});
    collection.hasOffers = true;
    await collection.save();
  } else if (data?.offerBasedOn === "trait") {
    await Collection.updateMany({traits: {$in: [data?.item]}}, {hasOffers: true});
  }
  return newOffer;
};

//--------add bidders to offer
export const addBidderToOfferService = async (id, bidder) => {
  const isExist = await Offer.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Offer doesn't found");
  }

  const results = await Offer.findOneAndUpdate(
    {_id: id},
    {$push: {bidders: bidder}},
    {
      new: true,
    }
  );
  //if not update throw an error
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't add bidder to offer");
  }
  return results;
};
//---------delete offer
export const deleteOfferService = async (id) => {
  const result = await Offer.findOneAndDelete({_id: id});
  return result;
};
