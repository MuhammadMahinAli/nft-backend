import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {getAllGigFaqsService, getSingleGigFaqService} from "./gigFaq.service.js";

//------get all gig faq
export const getAllGigFaq = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigFaqsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig faqs retrived successfully!",
    data: result,
  });
});
//------get single gig faq
export const getSingleGigFaq = catchAsync(async (req, res, next) => {
  const {gig, id} = req.query;
  const result = await getSingleGigFaqService(gig, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig faq retrived successfully!",
    data: result,
  });
});
