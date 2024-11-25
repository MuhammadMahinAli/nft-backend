import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import {addDesignerPortfolioService, deleteDesignerPortfolioService, getDesignerAllPortfolioService, getSingleDesignerPortfolioService, updateDesignerPortfolioService} from "./designerPortfolio.service.js";

//------create designer portfolio
export const createDesignerPortfolio = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await addDesignerPortfolioService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Portfolio added successfully!",
    data: result,
  });
});
//------get designer portfolios
export const getDesignerAllPortfolios = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getDesignerAllPortfolioService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Portfolio retrived successfully!",
    data: result,
  });
});
//------get designer single portfolio
export const getDesignerSinglePortfolio = catchAsync(async (req, res, next) => {
  const {id} = req.params;
  const result = await getSingleDesignerPortfolioService( id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Portfolio retrived successfully!",
    data: result,
  });
});
//------delete designer portfolio
export const deleteDesignerPortfolio = catchAsync(async (req, res, next) => {
  const {id} = req.params;
  const result = await deleteDesignerPortfolioService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Portfolio deleted successfully!",
    data: result,
  });
});
//------update designer portfolio
export const updateDesignerPortfolio = catchAsync(async (req, res, next) => {
  const result = await updateDesignerPortfolioService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Portfolio updated successfully!",
    data: result,
  });
});
