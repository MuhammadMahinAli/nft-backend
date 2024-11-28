import { getAllAuctionByCreatorService, getAllAuctionService } from "./auctionInfo.service.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";


//----- all auction by creator

export const getAllAuctionByCreatorController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const auctions = await getAllAuctionByCreatorService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All auction by creator is retrieved successfully!",
      data: auctions,
    });
  });

//----- all all auction

export const getAllAuctionController = catchAsync(async (req, res) => {

    const auctions = await getAllAuctionService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All auction is retrieved successfully!",
      data: auctions,
    });
  });