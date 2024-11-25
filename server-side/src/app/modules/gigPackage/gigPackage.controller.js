import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {getAllGigPackageService, getSingleGigPackageService} from "./gigPackage.service.js";

//------get all gig packages
export const getAllGigPackage = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigPackageService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig packages retrived successfully!",
    data: result,
  });
});
//------get single gig package
export const getSingleGigPackage = catchAsync(async (req, res, next) => {
  const {gig, packageName} = req.query;
  const result = await getSingleGigPackageService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig Package retrived successfully!",
    data: result,
  });
});
