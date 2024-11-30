import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getNftActivityByNftIdService, getNftActivityByIdService } from "./nftActivity.service.js";



//----- nft activity details

export const getNftActivityByIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const nftById = await getNftActivityByIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "NFT Activity details is retrieved successfully!",
      data: nftById,
    });
  });
//----- nft activity of a nft

export const getNftActivityByNftIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const nftById = await getNftActivityByNftIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "NFT Activity of a nft is retrieved successfully!",
      data: nftById,
    });
  });
  
