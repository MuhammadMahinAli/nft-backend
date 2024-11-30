import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getAllNftService, getNftByIdService } from "./nft.service.js";



//----- nft details

export const getNftByIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const nftById = await getNftByIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "NFT details is retrieved successfully!",
      data: nftById,
    });
  });
  
//----- all nft

export const getAllNftController = catchAsync(async (req, res) => {

    const allNft = await getAllNftService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All nft is retrieved successfully!",
      data: allNft,
    });
  });