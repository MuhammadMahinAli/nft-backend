import httpStatus from "http-status";
import {sendResponse} from "../../../utils/sendResponse.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {createOrderService, deleteOrderService, getAllOrderByUserService, getSingleOrderService, updateOrderService} from "./order.service.js";

//-------create an order
export const createOrder = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newOrder = await createOrderService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully!",
    data: newOrder,
  });
});
//-------get all Order
export const getAllOrderByUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const orders = await getAllOrderByUserService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully!",
    data: orders,
  });
});
//------get single Order
export const getSingleOrder = catchAsync(async (req, res) => {
  const id = req.params.id;
  const order = await getSingleOrderService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order retrieved successfully!",
    data: order,
  });
});
//-------update Order
export const updateOrder = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const order = await updateOrderService(id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order updated successfully!",
    data: order,
  });
});

//---------delete Order
export const deleteOrder = catchAsync(async (req, res) => {
  const id = req.params.id;
  const order = await deleteOrderService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order deleted successfully!",
    data: order,
  });
});
