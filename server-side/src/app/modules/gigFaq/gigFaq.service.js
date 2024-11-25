import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {GigFaq} from "./gigFaq.model.js";

//add gig faq
export const addGigFaqService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigFaq.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig faq");
  }

  return result[0];
};
//get all faqs
export const getAllGigFaqsService = async (gig) => {
  const faqs = await GigFaq.find({gig});
  return faqs;
};
//get single faq
export const getSingleGigFaqService = async (gig, id) => {
  const faq = await GigFaq.findOne({gig, _id: id});
  return faq;
};
//update gig faq
export const updateGigFaqService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigFaq.findOneAndUpdate({gig, _id: data?.id}, data, {new: true}).session(session);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig faq");
  }

  return result;
};
//delete gig faq
export const deleteGigFaqService = async (gig, faqId, session) => {
  const result = await GigFaq.findOneAndDelete({gig, _id: faqId}).session(session);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete gig faq");
  }

  return result;
};
