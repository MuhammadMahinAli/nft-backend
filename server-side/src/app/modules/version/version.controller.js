import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addProductToVersionService, createVersionService, getProductsByVersionService, getSingleVersionService} from "./version.service.js";

//--------create a version
export const createVersion = catchAsync(async (req, res, next) => {
  const data = req?.body;
  const newVersion = await createVersionService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "version created successfully!",
    data: newVersion,
  });
});
//--------get products by version
export const getProductsByVersion = catchAsync(async (req, res, next) => {
  const id = req?.params?.id;
  const products = await getProductsByVersionService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "products retrieved successfully!",
    data: products,
  });
});
//--------get single version
export const getSingleVersion = catchAsync(async (req, res, next) => {
  const {title} = req?.params;
  const version = await getSingleVersionService(title);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "version retrieved successfully!",
    data: version,
  });
});
