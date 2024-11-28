import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getAllMarketPlaceByAdminService, getAllMarketPlaceService } from "./marketplace.service.js";


//----- all market place by admin

export const getAllMarketPlaceByAdminController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const marketPlaces = await getAllMarketPlaceByAdminService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All market place by admin  is retrieved successfully!",
      data: marketPlaces,
    });
  });

  
//----- all all auction

export const getAllMarketPlaceController = catchAsync(async (req, res) => {

    const allMarketPlaces = await getAllMarketPlaceService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All market place is retrieved successfully!",
      data: allMarketPlaces,
    });
  });