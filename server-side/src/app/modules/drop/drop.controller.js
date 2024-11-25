import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addDropService, deleteDropService, getSingleDropService, updateDropService} from "./drop.service.js";

//-----add drop
export const addDrop = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await addDropService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Drop created successfully!",
    data: result,
  });
});
//-----get single Drop
export const getSingleDrop = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getSingleDropService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Drop retrieved successfully!",
    data: result,
  });
});

//-----delete Drop
export const deleteDrop = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteDropService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Drop deleted successfully!",
    data: result,
  });
});
//-----update Drop
export const updateDrop = catchAsync(async (req, res, next) => {
  const {id, totalMinted} = req.body;
  const result = await updateDropService(id, totalMinted);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Drop updated successfully!",
    data: result,
  });
});
