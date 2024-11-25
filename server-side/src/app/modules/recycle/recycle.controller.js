import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {createRecycleService, deleteRecycleService, getAllRecycleService, getSingleRecycleService, reprintProductService, updateRecycleStatusService} from "./recycle.service.js";

//-------create recycle
export const createRecycle = catchAsync(async (req, res, next) => {
  const data = req?.body;
  const recycle = await createRecycleService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "recycle created successfully!",
    data: recycle,
  });
});

//-------delete recycle
export const deleteRecycle = catchAsync(async (req, res, next) => {
  const recycle = await deleteRecycleService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "recycle deleted successfully!",
    data: recycle,
  });
});
//-------get single recycle
export const getSingleRecycle = catchAsync(async (req, res, next) => {
  const {requestedBy, productID} = req?.query;
  const recycle = await getSingleRecycleService({requestedBy, productID});

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "recycle retrived successfully!",
    data: recycle,
  });
});
//-------get all recycle
export const getAllRecycle = catchAsync(async (req, res, next) => {
  const recycles = await getAllRecycleService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Recycles retrived successfully!",
    data: recycles,
  });
});
//update status
export const updateRecycleStatus = catchAsync(async (req, res, next) => {
  const recycles = await updateRecycleStatusService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Recycles updated successfully!",
    data: recycles,
  });
});
//reprint product
export const reprintProduct = catchAsync(async (req, res, next) => {
  const result = await reprintProductService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "product reprinted successfully!",
    data: result,
  });
});
