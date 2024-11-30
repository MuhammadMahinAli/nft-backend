import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { getAllOfferInfoBySellIdService, getAllOfferInfoService, saveOfferInfoService } from "./offerInfo.service.js";


//------- save Paypal Info

export const saveOfferInfoController = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newOfferInfo = await saveOfferInfoService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offer Info is saved successfully!",
    data: newOfferInfo,
  });
});

//----- all offer info by sell id

export const getAllOfferInfoBySellIdController = catchAsync(async (req, res) => {
    const { id } = req.params;
    const offerBySellId = await getAllOfferInfoBySellIdService(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All offer info by sell id is retrieved successfully!",
      data: offerBySellId,
    });
  });
  
//----- all offer info

export const getAllOfferInfoController = catchAsync(async (req, res) => {

    const allOffer = await getAllOfferInfoService();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All offer info is retrieved successfully!",
      data: allOffer,
    });
  });