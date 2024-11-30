import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getTokenInfoByIdService, getTokenInfoByNftIdService } from "./tokenInfo.service.js";



//----- token details

export const getTokenInfoByIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const tokenInfoById = await getTokenInfoByIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Token details is retrieved successfully!",
      data: tokenInfoById,
    });
  });

//----- token info by nft id

export const getTokenInfoByNftIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const tokenInfoByNftId = await getTokenInfoByNftIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Token details of a nft is retrieved successfully!",
      data: tokenInfoByNftId,
    });
  });
  
