import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {addDesignerEducationService, deleteDesignerEducationService, getDesignerEducationsService} from "./designerEducation.service.js";

//------get designer all edu
export const getDesignerEducations = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerEducationsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Educations retrived successfully!",
    data: result,
  });
});
//------get designer all edu
export const addDesignerEducation = catchAsync(async (req, res, next) => {
  const result = await addDesignerEducationService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Educations added successfully!",
    data: result,
  });
});

//------delete designer educ
export const deleteDesignerEducation = catchAsync(async (req, res, next) => {
  const {education, designer} = req.body;
  const result = await deleteDesignerEducationService(education, designer);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education deleted successfully!",
    data: result,
  });
});
