import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addBidderToAuctionService, createAuctionService, deleteAuctionService} from "./auction.service.js";

// *-------create a auction
export const createAuction = catchAsync(async (req, res, next) => {
  const data = req.body;
  const auction = await createAuctionService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "auction created successfully!",
    data: auction,
  });
});

//-------add bidder to auction
export const addBidderToAuction = catchAsync(async (req, res) => {
  const id = req.params.id;
  const {bidder} = req?.body;
  const auction = await addBidderToAuctionService(id, bidder);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Add bidder to auction successfully!",
    data: auction,
  });
});
//-------delete offer
export const deleteAuction = catchAsync(async (req, res) => {
  const id = req.params.id;
  const auction = await deleteAuctionService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "auction deleted successfully!",
    data: auction,
  });
});
