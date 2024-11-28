import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addProductToVersionService, createVersionService, getProductsByVersionService} from "./version.service.js";

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
