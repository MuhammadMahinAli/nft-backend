import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {addDesignerCertificateService, deleteDesignerCertificateService, getDesignerAllCertificateService} from "./designerCertificate.service.js";
export const addDesignerCertificate = catchAsync(async (req, res, next) => {
  const result = await addDesignerCertificateService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Certificates added successfully!",
    data: result,
  });
});
//------get designer all certi
export const getDesignerAllCertificates = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerAllCertificateService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "certificates retrived successfully!",
    data: result,
  });
});
//------delete designer certificate
export const deleteDesignerCertificate = catchAsync(async (req, res, next) => {
  const {certificate, designer} = req.body;
  const result = await deleteDesignerCertificateService({certificate, designer});

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "certificate deleted successfully!",
    data: result,
  });
});
