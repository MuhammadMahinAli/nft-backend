import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {DesignerPortfolio} from "./designerPortfolio.model.js";
//add designer portfolio
export const addDesignerPortfolioService = async (payload) => {
  const result = await DesignerPortfolio.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create portfolio");
  }

  return result;
};
//update designer portfolio
export const updateDesignerPortfolioService = async (payload) => {
  const {designer, ...portfolio} = payload;
  const exist = await DesignerPortfolio.findOne({designer, _id: portfolio._id});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "portfolio doesn't found!");
  }
  const result = await DesignerPortfolio.findOneAndUpdate({designer, _id: portfolio._id}, portfolio, {new: true});

  return result;
};
//get all portfolios
export const getDesignerAllPortfolioService = async (designer) => {
  const result = await DesignerPortfolio.find({designer}).sort({createdAt: "desc"});
  return result;
};
//get single portfolio
export const getSingleDesignerPortfolioService = async (id) => {
  const result = await DesignerPortfolio.findOne({_id: id});
  return result;
};
//delete portfolio
export const deleteDesignerPortfolioService = async (id) => {
  const result = await DesignerPortfolio.findOneAndDelete({_id: id});

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "portfolio couldn't be deleted!");
  }
  return result;
};
