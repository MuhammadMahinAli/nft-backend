import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getAllNftCollectionService, getNftCollectionByIdService } from "./nftCollection.service.js";



//----- nft collection details

export const getNftCollectionByIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const nftCollectionById = await getNftCollectionByIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "NFT collection details is retrieved successfully!",
      data: nftCollectionById,
    });
  });
  
//----- all nft collection

export const getAllNftCollectionController = catchAsync(async (req, res) => {

    const allNft = await getAllNftCollectionService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All nft collection is retrieved successfully!",
      data: allNft,
    });
  });