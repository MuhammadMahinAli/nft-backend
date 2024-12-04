import { TokenInfo } from "./tokenInfo.model.js";



//-----------get tokenInfo by id
export const getTokenInfoByIdService = async (id) => {
    const tokenInfoById = await TokenInfo.findOne({ _id : id })
      .populate("tokenOfNft")
      .sort({ createdAt: -1 });
    return tokenInfoById;


  };
//-----------get tokenInfo by nft id
export const getTokenInfoByNftIdService = async (id) => {
    const tokenInfoByNftId = await TokenInfo.find({ tokenOfNft : id })
      .populate("tokenOfNft")
      .sort({ createdAt: -1 });
    return tokenInfoByNftId;
  };

