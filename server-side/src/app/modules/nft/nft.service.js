import { NFT } from "./nft.model.js";




//-----------get nft by id
export const getNftByIdService = async (id) => {
    const nftById = await NFT.find({ _id : id })
      .populate("sellId")
      .sort({ createdAt: -1 });
    return nftById;
  };

//-----------get all nft 
export const getAllNftService = async () => {
    const allNft = await NFT.find({})
      .populate("sellId")
      .sort({ createdAt: -1 });
    return allNft;
  };