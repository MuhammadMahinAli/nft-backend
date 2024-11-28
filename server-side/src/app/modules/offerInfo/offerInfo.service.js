import { OfferInfo } from "./OfferInfo.model.js";



//-----------get all offer by sell Id
export const getAllOfferInfoBySellIdService = async (id) => {
    const OfferInfoBySellId = await OfferInfo.find({ sellId : id })
      .populate("sellId")
      .sort({ createdAt: -1 });
    return OfferInfoBySellId;
  };

//-----------get all offer info 
export const getAllOfferInfoService = async () => {
    const allOfferInfo = await OfferInfo.find({})
      .populate("sellId")
      .sort({ createdAt: -1 });
    return allOfferInfo;
  };