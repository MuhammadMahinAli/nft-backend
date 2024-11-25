import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {addDesignerDetailsService, deleteDesignerDetailsService, getDesignerDetailsService, updateDesignerDetailsService} from "./designerDetails.service.js";

//------create designer details
export const createORUpdateDesignerDetails = catchAsync(async (req, res, next) => {
  const data = req.body;
  let result = null;
  const designer = await getDesignerDetailsService(data?.designer);
  if (designer?._id) {
    result = await updateDesignerDetailsService(data);
  } else {
    result = await addDesignerDetailsService(data);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Details ${designer?._id ? "updated" : "added"} successfully!`,
    data: result,
  });
});
//------get designer details
export const getDesignerDetails = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerDetailsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details retrived successfully!",
    data: result,
  });
});
//------delete designer details
export const deleteDesignerDetails = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteDesignerDetailsService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details deleted successfully!",
    data: result,
  });
});
//------update designer details
export const updateDesignerDetails = catchAsync(async (req, res, next) => {
  const result = await updateDesignerDetailsService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details updated successfully!",
    data: result,
  });
});
