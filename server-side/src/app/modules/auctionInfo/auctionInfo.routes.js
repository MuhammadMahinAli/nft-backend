import express from "express";
import { getAllAuctionByCreatorController, getAllAuctionController } from "./auctionInfo.controller.js";
const router = express.Router();


router.get("/getAllAuctionByCreator/:id", getAllAuctionByCreatorController);
router.get("/getAll", getAllAuctionController);


export const AuctionInfoRoutes = router;