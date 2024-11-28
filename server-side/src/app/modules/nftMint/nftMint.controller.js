import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js"
import { getMintedNftByUserService, storeMintedNftService } from "./nftMint.service.js";


//------- store minted nft

export const storeMintedNftController = catchAsync(async(req,res,next)=>{
    const data = req.body;

    const mintNftData = await storeMintedNftService(data);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Minted nft is stored successfully!",
        data: mintNftData
    });
});

// ------- get specific user's minted data
export const getMintedNftByUserController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const allMint = await getMintedNftByUserService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Minted nft by user is retrieved successfully!",
      data: allMint,
    });
  });