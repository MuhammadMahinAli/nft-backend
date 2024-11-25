import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Drop} from "./drop.model.js";

//--------add new drop
export const addDropService = async (data) => {
  //checking if drop is exist or not
  const drop = await Drop.findOne({collectionID: data.collectionID});
  if (drop) {
    throw new ApiError(httpStatus.CONFLICT, "This drop is already exist");
  }
  const newDrop = await Drop.create(data);
  if (!newDrop) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Unable to create drop");
  }
  return newDrop;
};

//--------find single drop
export const getSingleDropService = async (id) => {
  const drop = await Drop.findOne({collectionID: id});
  return drop;
};
//--------update drop
export const updateDropService = async (collectionID, totalMinted) => {
  const drop = await Drop.findOne({collectionID});
  if (!drop) {
    throw new ApiError(httpStatus.NOT_FOUND, "Drop not found");
  }
  const result = await Drop.findOneAndUpdate({collectionID}, {totalMinted}, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Drop couldn't be updated");
  }
  return result;
};

//--------delete  drop
export const deleteDropService = async (id) => {
  const drop = await Drop.findOneAndDelete({collectionID: id});
  return drop;
};
