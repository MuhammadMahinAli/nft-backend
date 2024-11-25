import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addBidderToOfferService, createOfferService, deleteOfferService} from "./offer.service.js";

//-------create a offer
export const createOffer = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newOffer = await createOfferService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer created successfully!",
    data: newOffer,
  });
});

//-------add bidder to offer
export const addBidderToOffer = catchAsync(async (req, res) => {
  const id = req.params.id;
  const {bidder} = req?.body;
  const offer = await addBidderToOfferService(id, bidder);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Add bidder to offer successfully!",
    data: offer,
  });
});
//-------delete offer
export const deleteOffer = catchAsync(async (req, res) => {
  const id = req.params.id;
  const offer = await deleteOfferService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "offer deleted successfully!",
    data: offer,
  });
});
