import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {LuckyDrawToken} from "./token.model.js";
//--------create recycle
export const createLuckyDrawTokenService = async (data) => {
  //find token
  const exist = await LuckyDrawToken.findOne({user: data?.user, luckyDraw: data?.luckyDraw});
  if (exist) {
    exist.spinNumber = exist.spinNumber + data?.spinNumber;
    exist.spinComplete = false;
    await exist.save();
    return exist;
  } //

  const token = data?.user?.slice(0, 5) + data?.luckyDraw?.slice(-4);

  const newToken = await LuckyDrawToken.create({token, ...data});
  if (!newToken) {
    throw new ApiError(httpStatus.BAD_REQUEST, "unable to create token");
  }
  return newToken;
};
//----------get single token
export const getSingleTokenService = async (data) => {
  const result = await LuckyDrawToken.findOne({user: data?.user, luckyDraw: data?.luckyDraw});
  return result;
};

//update spin number

export const updateSpinService = async (payload) => {
  const exist = await LuckyDrawToken.findOne({user: payload?.user, luckyDraw: payload?.luckyDraw});
  if (!exist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sorry! Token doesn't found");
  }
  exist.alreadySpinned++;
  console.log(exist.alreadySpinned);
  if (exist.alreadySpinned === exist?.spinNumber) {
    exist.spinComplete = true;
  }
  await exist.save();
};
