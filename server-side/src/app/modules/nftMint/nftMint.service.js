import httpStatus from "http-status";
import { ApiError } from "../../../handleError/apiError.js";
import { NftMint } from "./nftMint.model.js";

//---- store minted nft
export const storeMintedNftService = async (mintData) => {
  try {
    const result = NftMint.create(mintData);
    if (!result) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Faild to save minted nft data."
      );
    }
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

// ------- get specific user's minted data

export const getMintedNftByUserService = async (id) => {
  const allMint = await NftMint.find({ user: id })
    .populate("user")
    .sort({ createdAt: -1 });
  return allMint;
};
