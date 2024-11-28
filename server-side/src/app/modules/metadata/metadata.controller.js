import {createMetaDataService} from "./metadata.service.js";
import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
//------create meta data
export const createMetaData = catchAsync(async (req, res, next) => {
  const data = req?.body;
  const result = await createMetaDataService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "create metadata successfully!",
    data: result,
  });
});
