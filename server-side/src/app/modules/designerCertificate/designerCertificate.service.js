import httpStatus from "http-status";
import {DesignerCertificate} from "./designerCertificate.model.js";
import {ApiError} from "../../../handleError/apiError.js";
//add designer certificate
export const addDesignerCertificateService = async (payload) => {
  const result = await DesignerCertificate.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create certificate");
  }

  return result;
};
//get designer all certificates
export const getDesignerAllCertificateService = async (designer) => {
  const certificates = await DesignerCertificate.find({designer});
  return certificates;
};
//delete certificate
export const deleteDesignerCertificateService = async ({certificate, designer}) => {
  const result = await DesignerCertificate.findOneAndDelete({_id: certificate, designer});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete certificate");
  }

  return result;
};
//update designer certificate
export const updateDesignerCrtificateService = async (payload) => {
  const {designer, ...certificate} = payload;
  const exist = await DesignerCertificate.findOne({designer, _id: certificate.id});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Certificate doesn't found!");
  }
  const result = await DesignerCertificate.findOneAndUpdate({designer, _id: certificate.id}, certificate, {new: true});

  return result;
};
