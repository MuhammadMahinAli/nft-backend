import httpStatus from "http-status";
import { ApiError } from "../../../handleError/apiError.js";
import { GigReview } from "./gigReview.model.js";

//add gig review
export const addGigReviewService = async (payload) => {
  const result = await GigReview.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add gig review");
  }

  return result;
};
//get all review
export const getAllGigReviewService = async (gig) => {
  const reviews = await GigReview.find({ gig })
    .populate("gig")
    .populate("buyer")
    .populate("designer");
  return reviews;
};
//get all review by designer
export const getGigReviewByDesignerService = async (designer) => {
  const reviews = await GigReview.find({ designer })
    .populate("gig")
    .populate("buyer")
    .populate("designer");
  return reviews;
};
//get single review
export const getSingleGigReviewService = async (gig, id) => {
  const review = await GigReview.findOne({ gig, _id: id })
    .populate("gig")
    .populate("buyer")
    .populate("designer");
  return review;
};
//update gig review
export const updateGigReviewService = async (payload) => {
  const result = await GigReview.findOneAndUpdate(
    { _id: payload?.id },
    payload,
    { new: true }
  );
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig review");
  }

  return result;
};

//delete gig review
export const deleteGigReviewService = async (id) => {
  const result = await GigReview.findOneAndDelete({ gig, _id: id });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete gig review");
  }

  return result;
};
