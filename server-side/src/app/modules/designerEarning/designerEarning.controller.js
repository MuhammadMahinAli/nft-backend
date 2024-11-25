import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";

import {getDesignerEarningService, updateDesignerEarningService} from "./designerEarning.service.js";

//------get designer earning
export const getDesignerEarning = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerEarningService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "earnings retrived successfully!",
    data: result,
  });
});

//------update designer earning
export const updateDesignerEarning = catchAsync(async (req, res, next) => {
  const result = await updateDesignerEarningService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "earning updated successfully!",
    data: result,
  });
});
