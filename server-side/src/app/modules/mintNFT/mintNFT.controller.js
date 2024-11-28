import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {createMintNFTService} from "./mintNFT.service.js";

//------create an minted nft
export const createMintNFT = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await createMintNFTService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NFt minting request send successfully!",
    data: result,
  });
});

