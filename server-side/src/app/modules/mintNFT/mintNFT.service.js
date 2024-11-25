import httpStatus from "http-status";
import {MintNFT} from "./mintNFT.model.js";
import {ApiError} from "../../../handleError/apiError.js";
import config from "../../../config/index.js";
import axios from "axios";

//-------------mint an NFT
export const createMintNFTService = async (data) => {
  const newNFT = await MintNFT.create(data);
  if (!newNFT) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create nft");
  }

  return newNFT;
};

//mint nft by crossmint
export const mintNFTByCrossmintService = async (CID, wallet, supply) => {
  const data = JSON.stringify({
    recipient: `polygon:${wallet}`,
    metadata: `https://gateway.pinata.cloud/ipfs/${CID}`,
    supplyLimit: supply,
  });
  try {
    const response = await axios({
      url: "https://staging.crossmint.com/api/2022-06-09/collections/b4751742-3fb1-4ba9-9e37-a73498e50a8a/nfts",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": config.crossmint_client_secret,
        // "X-API-KEY": config.crossmint_project_id,
      },
      data: data,
    });

    const res = response.data;
    console.log(JSON.stringify(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};
// mintNFTByCrossmintService();
//0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
export const getAllNFTService = async (wallet) => {
  try {
    const result = await MintNFT.find({listed: false});
    // staging.crossmint.com/api/2022-06-09/collections/b4751742-3fb1-4ba9-9e37-a73498e50a8a/nfts'

    // const result = await axios({
    //   url: `https://staging.crossmint.com/api/v1-alpha1/wallets/polygon:${wallet}/nfts`,
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     "X-API-KEY": config.crossmint_client_secret,
    //     "X-PROJECT-ID": config.crossmint_project_id,
    //   },
    // });

    return result;
  } catch (error) {
    console.log(error);
    throw new ApiError(httpStatus.BAD_REQUEST, "Cannot get NFTs!");
  }
};

// getAllNFTService()
