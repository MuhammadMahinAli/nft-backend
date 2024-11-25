import mongoose from "mongoose";
import {Gig} from "./gig.model.js";
import {addGigFaqService, deleteGigFaqService, updateGigFaqService} from "../gigFaq/gigFaq.service.js";
import {addGigPackageService, deleteGigPackageService, updateGigPackageService} from "../gigPackage/gigPackage.service.js";
import {createService, deleteService, updateService} from "../gigServices/serviceUtils.js";
import { ApiError } from "../../../handleError/apiError.js";
import httpStatus from "http-status";

//create gig
export const createGigService = async (payload) => {
  const {faqs, packages, service, ...data} = payload;
  let res = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await Gig.create([data], {session});
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig");
    }
    res = result[0];
    //creating faq
    if (faqs) {
      await Promise.all(faqs?.map(async (faq) => await addGigFaqService({gig: res?._id, ...faq, session})));
    }
    //creating package
    if (packages) {
      await Promise.all(packages?.map(async (pack) => await addGigPackageService({gig: res?._id, ...pack, session})));
    }
    //creating service
    if (service) {
      const newService = await createService({gig: res?._id, ...service, session});
      // res.service = newService._id;
      // await res.save({session});
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return res;
};
//get all gig
export const getAllGigService = async (designer) => {
  const gigs = await Gig.find({designer}).populate("designer");
  return gigs;
};
//get single gig
export const getSingleGigService = async (id) => {
  const gig = await Gig.findOne({_id: id}).populate("designer");
  return gig;
};
//update gig
export const updateGigService = async (payload) => {
  const {faqs, packages, service, gig} = payload;
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    result = await Gig.findOneAndUpdate({_id: gig.id}, gig, {new: true}).session(session);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig");
    }
    //updating faq
    if (faqs) {
      await Promise.all(faqs?.map(async (faq) => await updateGigFaqService({gig: gig.id, faq, session})));
    }
    //updating package
    if (packages) {
      await Promise.all(packages?.map(async (pack) => await updateGigPackageService({gig: gig.id, pack, session})));
    }
    //updating service
    if (service) {
      await updateService(gig, service, session);
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return res;
};

//delete gig
export const deleteGigService = async (payload) => {
  const {faqs, packages, service, gig} = payload;
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    result = await Gig.findOneAndDelete({_id: gig}).session(session);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete gig");
    }
    //deleting faq
    if (faqs) {
      await Promise.all(faqs?.map(async (faq) => await deleteGigFaqService({gig, faq, session})));
    }
    //deleting package
    if (packages) {
      await Promise.all(packages?.map(async (pack) => await deleteGigPackageService({gig, pack, session})));
    }
    //deleting service
    if (service) {
      await deleteService(gig, service, session);
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return res;
};

