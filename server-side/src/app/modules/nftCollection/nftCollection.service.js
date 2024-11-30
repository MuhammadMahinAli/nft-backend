import { NFTCollection } from "./nftCollection.model.js";





//-----------get nft collection by id
export const getNftCollectionByIdService = async (id) => {
    const nftCollectionById = await NFTCollection.find({ _id : id })
      .populate("allNft.nft")
      .populate("tokenDetails")
      .sort({ createdAt: -1 });
    return nftCollectionById;
  };

//-----------get all nft collection
export const getAllNftCollectionService = async () => {
    const allNftCollection = await NFTCollection.find({})
    .populate("allNft.nft")
    .populate("tokenDetails")
      .sort({ createdAt: -1 });
    return allNftCollection;
  };