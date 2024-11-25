import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerEducation} from "./designerEducation.model.js";
//add education
export const addDesignerEducationService = async (payload) => {
  const result = await DesignerEducation.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create education");
  }

  return result;
};
//get all education
export const getDesignerEducationsService = async (designer) => {
  const educations = await DesignerEducation.find({designer});
  return educations;
};
//get single education
export const getDesignerSingleEducationService = async (designer, id) => {
  const education = await DesignerEducation.findOne({designer, _id: id});
  return education;
};
//delete education
export const deleteDesignerEducationService = async (education, designer) => {
  const result = await DesignerEducation.findOneAndDelete({_id: education, designer});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete education");
  }

  return result;
};
//update education
export const updateDesignerEducationService = async (payload) => {
  const {designer, ...education} = payload;
  const exist = await DesignerEducation.findOne({designer, _id: education.id});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "education doesn't found!");
  }
  const result = await DesignerEducation.findOneAndUpdate({designer, _id: education.id}, education, {new: true});

  return result;
};
