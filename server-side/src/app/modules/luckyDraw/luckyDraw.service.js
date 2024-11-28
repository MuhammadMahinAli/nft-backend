import httpStatus from "http-status";
import {LuckyDraw} from "./luckyDraw.model.js";
import {generateLuckyDrawID} from "./luckyDraw.utils.js";
import {ApiError} from "../../../handleError/apiError.js";
//--------create recycle
export const createLuckyDrawService = async (data) => {
  const luckyDrawID = await generateLuckyDrawID();
  const newLuckyDraw = await LuckyDraw.create({luckyDrawID, ...data});
  if (!newLuckyDraw) {
    throw new ApiError(httpStatus.BAD_REQUEST, "unable to create lucky draw");
  }
  return newLuckyDraw;
};

//-----add product to lucky draw
export const addProductToLuckyDrawService = async (id, product) => {
  const luckyDraw = await LuckyDraw.findOne({luckyDrawID: id});
  if (!luckyDraw) {
    throw new ApiError(httpStatus.NOT_FOUND, "luckydraw doesn't found!");
  }
  const results = await LuckyDraw.findOneAndUpdate(
    {luckyDrawID: id},
    {$push: {products: product}},
    {
      new: true,
    }
  );

  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "couldn't add product to lucky draw");
  }
  return results;
};
//-----delete product from recycle
export const deleteProductFromDrawService = async (id, product) => {
  const luckyDraw = await LuckyDraw.findOne({luckyDrawID: id});
  if (!luckyDraw) {
    throw new ApiError(httpStatus.BAD_REQUEST, "luckyDraw doesn't found");
  }
  const results = await LuckyDraw.findOneAndUpdate(
    {luckyDrawID: id},
    {$pull: {products: {productID: product}}},
    {
      new: true,
    }
  );
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product couldn't be delete from lucky draw");
  }
  return results;
};
//-----add participants to lucky draw
export const addParticipantToLuckyDrawService = async (id, participant) => {
  const luckyDraw = await LuckyDraw.findOne({luckyDrawID: id});
  if (!luckyDraw) {
    throw new ApiError(httpStatus.NOT_FOUND, "luckydraw doesn't found!");
  }
  const results = await LuckyDraw.findOneAndUpdate(
    {luckyDrawID: id},
    {$push: {participants: participant}},
    {
      new: true,
    }
  );

  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "couldn't add participant to lucky draw");
  }
  return results;
};
//-----delete participant from lucky draw
export const deleteParticipantFromDrawService = async (id, participant) => {
  const luckyDraw = await LuckyDraw.findOne({luckyDrawID: id});
  if (!luckyDraw) {
    throw new ApiError(httpStatus.BAD_REQUEST, "luckyDraw doesn't found");
  }
  const results = await LuckyDraw.findOneAndUpdate(
    {luckyDrawID: id},
    {$pull: {participants: participant}},
    {
      new: true,
    }
  );
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "participant couldn't be delete from lucky draw");
  }
  return results;
};
//----------set winner to lucky draw
export const setWinnerToLuckyDrawService = async (id, winner) => {
  const luckyDraw = await LuckyDraw.findOne({luckyDrawID: id});
  if (!luckyDraw) {
    throw new ApiError(httpStatus.NOT_FOUND, "luckydraw doesn't found!");
  }
  const results = await LuckyDraw.findOneAndUpdate(
    {luckyDrawID: id},
    {winner: winner},
    {
      new: true,
    }
  );
  if (!results) {
    throw new ApiError(httpStatus.BAD_REQUEST, "winner couldn't be set to lucky draw");
  }
  return results;
};
//----------delete luckyDraw
export const deleteLuckyDrawService = async (id) => {
  const result = await LuckyDraw.findByIdAndDelete({luckyDrawID: id});
  return result;
};
