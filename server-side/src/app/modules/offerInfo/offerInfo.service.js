import { OfferInfo } from "./OfferInfo.model.js";

//  ---------- save offer info
export const saveOfferInfoService = async (formData) => {
  try {
    const result = await OfferInfo.create(formData);
    if (!result) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Failed to save offer Info."
      );
    }
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

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