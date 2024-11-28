import { AuctionInfo } from "./auctionInfo.model.js";



//-----------get auction info by creator
export const getAllAuctionByCreatorService = async (id) => {
    const auctionByCreator = await AuctionInfo.find({ creator : id })
      .populate("creator", "name  email")
      .sort({ createdAt: -1 });
    return auctionByCreator;
  };

//-----------get all auction info 
export const getAllAuctionService = async () => {
    const allAuctions = await AuctionInfo.find({})
      .populate("creator", "name  email")
      .sort({ createdAt: -1 });
    return allAuctions;
  };
