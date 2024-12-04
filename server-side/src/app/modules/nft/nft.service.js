import { NFT } from "./nft.model.js";




//-----------get nft by id
export const getNftByIdService = async (id) => {
    const nftById = await NFT.find({ _id : id })
      .sort({ createdAt: -1 });
    return nftById;
  };

//-----------get all nft 
export const getAllNftService = async () => {
    const allNft = await NFT.findOne({})
      .sort({ createdAt: -1 });
    return allNft;
  };