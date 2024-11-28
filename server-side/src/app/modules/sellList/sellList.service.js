import { SellList } from "./sellList.model.js";


//-----------get sell List info by seller
export const getAllSellListBySellerService = async (id) => {
    const sellListBySeller = await SellList.find({ seller : id })
      .populate("seller", "name  email")
      .sort({ createdAt: -1 });
    return sellListBySeller;
  };

//-----------get all sell List info 
export const getAllSellListService = async () => {
    const allSellList = await SellList.find({})
      .populate("seller", "name  email")
      .sort({ createdAt: -1 });
    return allSellList;
  };