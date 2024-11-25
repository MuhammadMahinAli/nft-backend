import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addParticipantToLuckyDrawService, addProductToLuckyDrawService, createLuckyDrawService, deleteLuckyDrawService, deleteParticipantFromDrawService, deleteProductFromDrawService, getAllDrawService, getSingleDrawService, setWinnerToLuckyDrawService} from "./luckyDraw.service.js";

//-------create lucky draw
export const createLuckyDraw = catchAsync(async (req, res, next) => {
  const data = req.body;
  const luckyDraw = await createLuckyDrawService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw created successfully!",
    data: luckyDraw,
  });
});
//-------get all lucky draw
export const getAllLuckyDraw = catchAsync(async (req, res, next) => {
  const result = await getAllDrawService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw retrieved successfully!",
    data: result,
  });
});
//-------get all lucky draw
export const getSingleLuckyDraw = catchAsync(async (req, res, next) => {
  const result = await getSingleDrawService(req?.params?.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "luckyDraw retrieved successfully!",
    data: result,
  });
});
//-------add or delete product to lucky draw
export const addOrDeleteProductToLuckyDraw = catchAsync(async (req, res, next) => {
  const {id, product, add} = req.body;
  let luckyDraw = null;
  if (add) {
    luckyDraw = await addProductToLuckyDrawService(id, product);
  } else {
    luckyDraw = await deleteProductFromDrawService(id, product);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "products of luckyDraw updated successfully!",
    data: luckyDraw,
  });
});

//-------add or delete participant to lucky draw
export const addORDeleteParticipantToLuckyDraw = catchAsync(async (req, res, next) => {
  const {id, participant, add} = req.body;
  let luckyDraw = null;
  if (add) {
    luckyDraw = await addParticipantToLuckyDrawService(id, participant);
  } else {
    luckyDraw = await deleteParticipantFromDrawService(id, participant);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "participants of luckyDraw updated successfully!",
    data: luckyDraw,
  });
});

//-------set winner to lucky draw
export const setWinnerToLuckyDraw = catchAsync(async (req, res, next) => {
  const {winner, id} = req.body;
  const luckyDraw = await setWinnerToLuckyDrawService(id, winner);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Set winner to luckyDraw successfully!",
    data: luckyDraw,
  });
});
//-------delete lucky draw
export const deleteLuckyDraw = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const luckyDraw = await deleteLuckyDrawService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "delete luckyDraw successfully!",
    data: luckyDraw,
  });
});
