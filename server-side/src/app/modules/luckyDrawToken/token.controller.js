import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";

import {createLuckyDrawTokenService, getSingleTokenService, updateSpinService} from "./token.service.js";

//-------create lucky draw
export const createLuckyDrawToken = catchAsync(async (req, res, next) => {
  const data = req.body;
  const token = await createLuckyDrawTokenService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw token created successfully!",
    data: token,
  });
});

//-------get all lucky draw
export const getSingleLuckyToken = catchAsync(async (req, res, next) => {
  const {user, luckyDraw} = req?.query;
  const result = await getSingleTokenService({user, luckyDraw});

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw token retrieved successfully!",
    data: result,
  });
});

//update lucky token
export const updateSpin = catchAsync(async (req, res, next) => {
  const result = await updateSpinService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw token updated successfully!",
    data: result,
  });
});
