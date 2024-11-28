import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {MetaData} from "./metadata.model.js";

//-------create metadata
export const createMetaDataService = async (payload) => {
  const newMetaData = await MetaData.create(payload);
  if (!newMetaData) {
    throw new ApiError(httpStatus.BAD_REQUEST, "unable to create metadata!");
  }
  return newMetaData;
};
