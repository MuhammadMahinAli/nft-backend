import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerDetails} from "./designerDetails.model.js";
import {addDesignerEducationService, updateDesignerEducationService} from "../designerEducation/designerEducation.service.js";
import mongoose from "mongoose";
import {addDesignerCertificateService, updateDesignerCrtificateService} from "../designerCertificate/designerCertificate.service.js";
import {DesignerEducation} from "../designerEducation/designerEducation.model.js";
import {DesignerCertificate} from "../designerCertificate/designerCertificate.model.js";
import {addDesignerEarningService} from "../designerEarning/designerEarning.service.js";
import {DesignerPortfolio} from "../designerPortfolio/designerPortfolio.model.js";
import {updateDesignerPortfolioService} from "../designerPortfolio/designerPortfolio.service.js";
//add designer details
export const addDesignerDetailsService = async (payload) => {
  let data = null;
  const {educations, certificates, ...others} = payload;
  const session = await mongoose.startSession();
  const userName = others.displayName.split(" ")[0] + others.designer.slice(-3);
  const detailsData = {userName, ...others};
  try {
    session.startTransaction();
    const result = await DesignerDetails.create([detailsData], {session});
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create DesignerDetails");
    }
    data = result[0];
    await addDesignerEarningService({designer: data?._id}, session);

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return data;
};

export const getDesignerDetailsService = async (designer) => {
  const details = await DesignerDetails.findOne({designer});
  return details;
};
//deleting details
export const deleteDesignerDetailsService = async (designer) => {
  const session = await mongoose.startSession();
  let result = null;
  try {
    session.startTransaction();
    result = await DesignerDetails.findOneAndDelete({designer}).session(session);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete designer details");
    }

    // //deleting eduction
    // const educations = await DesignerEducation.find({designer});
    // await Promise.all(educations?.map(async (education) => await DesignerEducation.findOneAndDelete({designer, _id: education}).session(session)));
    // //deleting certificate
    // const certificates = await DesignerCertificate.find({designer});
    // await Promise.all(certificates?.map(async (certificate) => await DesignerCertificate.findOneAndDelete({designer, _id: certificate}).session(session)));
    // //deleting portfolios
    // const portfolios = await DesignerPortfolio.find({designer});
    // await Promise.all(portfolios?.map(async (portfolio) => await DesignerPortfolio.findOneAndDelete({designer, _id: portfolio}).session(session)));
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return result;
};
//updating details
export const updateDesignerDetailsService = async (payload) => {
  let data = null;
  const {educations, certificates, portfolios, designer, ...others} = payload;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    data = await DesignerDetails.findOneAndUpdate({designer: designer}, others, {new: true}).session(session);
    if (!data) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update DesignerDetails");
    }

    //creating eduction
    if (educations) {
      await Promise.all(educations?.map(async (education) => await updateDesignerEducationService({designer, ...education, session})));
    }
    //creating certificate
    if (certificates) {
      await Promise.all(certificates?.map(async (certificate) => await updateDesignerCrtificateService({designer, ...certificate, session})));
    }
    //creating portfolios
    if (portfolios) {
      await Promise.all(portfolios?.map(async (portfolio) => await updateDesignerPortfolioService({designer, ...portfolio, session})));
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return data;
};
