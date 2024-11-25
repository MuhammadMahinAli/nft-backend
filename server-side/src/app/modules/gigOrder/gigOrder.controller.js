import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addGigOrderService, deleteGigOrderService, getAllGigOrderService, getGigOrderByBuyerService, getGigOrderByStatusService, getSingleGigOrderService, makePaymentService, updateGigOrderStatusService} from "./gigOrder.service.js";
//------add order
export const addGigOrder = catchAsync(async (req, res, next) => {
  const result = await addGigOrderService(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "add Gig order successfully!",
    data: result,
  });
});
//------get all gig order
export const getAllGigOrder = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getAllGigOrderService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig orders retrived successfully!",
    data: result,
  });
});
//------get gig order by buyer
export const getGigOrderByBuyer = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getGigOrderByBuyerService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig orders retrived successfully!",
    data: result,
  });
});
//------get gig order by status
export const getGigOrderByStatus = catchAsync(async (req, res, next) => {
  const {id, status} = req.query;
  const result = await getGigOrderByStatusService(id, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig orders retrived successfully!",
    data: result,
  });
});
//------get single gig order
export const getSingleGigOrder = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getSingleGigOrderService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gig order retrived successfully!",
    data: result,
  });
});
//------update order status
export const updateGigOrderStatus = catchAsync(async (req, res, next) => {
  const result = await updateGigOrderStatusService(req?.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update Gig order status successfully!",
    data: result,
  });
});
//------delete order status
export const deleteGigOrder = catchAsync(async (req, res, next) => {
  const result = await deleteGigOrderService(req?.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Gig order successfully!",
    data: result,
  });
});
//------make payment
export const makePayment = catchAsync(async (req, res, next) => {
  const result = await makePaymentService(req?.body?.products);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Make payment successfully!",
    data: result,
  });
});
