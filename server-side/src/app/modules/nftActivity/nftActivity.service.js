import { NFTActivity } from "./nftActivity.model.js";





//-----------get nft activity by id
export const getNftActivityByIdService = async (id) => {
    const nftActivityById = await NFTActivity.findOne({ _id : id })
      .populate("nftId")
      .sort({ createdAt: -1 });
    return nftActivityById;
  };

  
//-----------get nft activity by nft id
export const getNftActivityByNftIdService = async (id) => {
    const nftActivityByNftId = await NFTActivity.findOne({ nftId : id })
      .populate("nftId")
      .sort({ createdAt: -1 });
    return nftActivityByNftId;
  };

