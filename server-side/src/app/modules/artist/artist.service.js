import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Artist} from "./artist.model.js";

// create artist
export const createArtistService = async (userInfo) => {
  const result = await Artist.create(userInfo);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create Artist");
  }

  return result;
};

//update Artist
export const updateArtistService = async (id, payload) => {
  const isExist = await Artist.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Artist doesn't found");
  }

  const result = await Artist.findOneAndUpdate({_id: id}, payload, {
    new: true,
  });
  return result;
};
