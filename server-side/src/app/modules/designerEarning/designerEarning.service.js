import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerEarning} from "./designerEarning.model.js";

//add designer earnings
export const addDesignerEarningService = async (payload) => {
  const {session, ...data} = payload;
  const result = await DesignerEarning.create([data], {session});
  if (!result[0]) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create earning");
  }

  return result[0];
};

//get designer earnings
export const getDesignerEarningService = async (designer) => {
  const earning = await DesignerEarning.findOne({designer});
  return earning;
};

//update designer earnings
export const updateDesignerEarningService = async (payload) => {
  const exist = await DesignerEarning.findOne({designer: payload?.designer});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Earning not found");
  }
  const result = await DesignerEarning.findOneAndUpdate({designer: payload?.designer}, payload, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update earning");
  }
  return result;
};
