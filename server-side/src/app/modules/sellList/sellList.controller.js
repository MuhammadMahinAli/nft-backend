import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getAllSellListBySellerService, getAllSellListService } from "./sellList.service.js";


//----- all sell list by seller

export const getAllSellListBySellerController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const sellListBySeller = await getAllSellListBySellerService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All sell list by seller is retrieved successfully!",
      data: sellListBySeller,
    });
  });
  
//----- all sell list 

export const getAllSellLisController = catchAsync(async (req, res) => {
  
    const sellList = await getAllSellListService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All sell list is retrieved successfully!",
      data: sellList,
    });
  });