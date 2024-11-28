import { MarketPlace } from "./marketplace.model.js";

//-----------get marketplace by admin
export const getAllMarketPlaceByAdminService = async (id) => {
    const getMarketPlaceByAdmin = await MarketPlace.find({ creator : id })
      .populate("admin", "name  email")
      .populate("auction")
      .populate("sales.sellList")
      .populate("offerInfo")
      .sort({ createdAt: -1 });
    return getMarketPlaceByAdmin;
  };

//-----------get all marketplace 
export const getAllMarketPlaceService = async () => {
    const allMarketPlace = await MarketPlace.find({})
      .populate("admin", "name  email")
      .populate("auction")
      .populate("sales.sellList")
      .populate("offerInfo")
      .sort({ createdAt: -1 });
    return allMarketPlace;
  };