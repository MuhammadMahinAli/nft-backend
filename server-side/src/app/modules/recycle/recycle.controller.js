import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addProductToRecycleService, deleteProductFromRecycleService, deleteRecycleService, getAllRecycleService, getSingleRecycleService} from "./recycle.service.js";

//-------add or delete product to recycle
export const addOrDeleteProductToRecycle = catchAsync(async (req, res, next) => {
  const data = req?.body;
  let recycle = null;
  if (data?.add) {
    recycle = await addProductToRecycleService(data);
  } else {
    recycle = await deleteProductFromRecycleService(data);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "products of recycle updated successfully!",
    data: recycle,
  });
});

//-------delete recycle
export const deleteRecycle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id;
  const recycle = await deleteRecycleService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "recycle deleted successfully!",
    data: recycle,
  });
});
//-------get single recycle
export const getSingleRecycle = catchAsync(async (req, res, next) => {
  const id = req?.params?.id;
  const recycle = await getSingleRecycleService(id);

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
