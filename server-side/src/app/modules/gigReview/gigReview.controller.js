import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addGigReviewService, deleteGigReviewService, getAllGigReviewService, getGigReviewByDesignerService, getSingleGigReviewService, updateGigReviewService} from "./gigReview.service.js";
//add review
export const addGigReview = catchAsync(async (req, res, next) => {
  const result = await addGigReviewService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig review added successfully!",
    data: result,
  });
});
//------get all gig review
export const getAllGigReview = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigReviewService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig review retrived successfully!",
    data: result,
  });
});
//------get all gig review by designer
export const getGigReviewByDesigner = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getGigReviewByDesignerService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig review retrived successfully!",
    data: result,
  });
});

//------get single gig review
export const getSingleGigReview = catchAsync(async (req, res, next) => {
  const {gig, reviewId} = req?.query;
  const result = await getSingleGigReviewService(gig, reviewId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig Review retrived successfully!",
    data: result,
  });
});
//------update gig review
export const updateGigReview = catchAsync(async (req, res, next) => {
  const data = req?.body;
  const result = await updateGigReviewService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig Review updated successfully!",
    data: result,
  });
});
//------delete gig review
export const deleteGigReview = catchAsync(async (req, res, next) => {
  const id = req?.params.id;
  const result = await deleteGigReviewService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig Review updated successfully!",
    data: result,
  });
});
