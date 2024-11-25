import httpStatus from "http-status";
import {GigPackage} from "./gigPackage.model.js";
import {ApiError} from "../../../handleError/apiError.js";

//add gig faq
export const addGigPackageService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigPackage.create([data], {session});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create gig package");
  }

  return result[0];
};
//get all packages 01832305292
export const getAllGigPackageService = async (gig) => {
  const packages = await GigPackage.find({gig});
  return packages;
};
//get single packages
export const getSingleGigPackageService = async (gig, packageName) => {
  const pack = await GigPackage.findOne({gig, packageName});
  return pack;
};
//update gig package
export const updateGigPackageService = async (payload) => {
  const {session, ...data} = payload;
  const result = await GigPackage.findOneAndUpdate({gig, _id: data?.id}, data, {new: true}).session(session);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update gig package");
  }

  return result;
};

//delete gig package
export const deleteGigPackageService = async (gig, id, session) => {
  const result = await GigPackage.findOneAndDelete({gig, _id: id}).session(session);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete gig package");
  }

  return result;
};
