import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {createMintNFTService, getAllNFTService, mintNFTByCrossmintService} from "./mintNFT.service.js";

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
// //------ minted nft by crossmint
export const mintNFTByCrossmint = catchAsync(async (req, res, next) => {
  const {CID, wallet, supply} = req.body;
  const result = await mintNFTByCrossmintService(CID, wallet, supply);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NFt minting by crossmint request send successfully!",
    data: result,
  });
});
// //------ get all Nft
export const getAllNFT = catchAsync(async (req, res, next) => {
  const {wallet} = req.params;
  const result = await getAllNFTService(wallet);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NFTs retrieved successfully!",
    data: result,
  });
});
