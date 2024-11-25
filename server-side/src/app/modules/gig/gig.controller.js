import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {createGigService, deleteGigService, getAllGigService, getSingleGigService, updateGigService} from "./gig.service.js";

//------create gig
export const createGig = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await createGigService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig created successfully!",
    data: result,
  });
});
//------get all gig
export const getAllGig = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gigs retrived successfully!",
    data: result,
  });
});
//------get single gig
export const getSingleGig = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getSingleGigService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig retrived successfully!",
    data: result,
  });
});
//------delete gig
export const deleteGig = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await deleteGigService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig deleted successfully!",
    data: result,
  });
});
//------update gig
export const updateGig = catchAsync(async (req, res, next) => {
  const result = await updateGigService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig updated successfully!",
    data: result,
  });
});
