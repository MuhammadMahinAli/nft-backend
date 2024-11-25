import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createAuctionZodSchema} from "./auction.validation.js";
import {addBidderToAuction, createAuction, deleteAuction} from "./auction.controller.js";

const router = express.Router();

router.post("/", validateRequest(createAuctionZodSchema), createAuction);
router.post("/addBidder/:id", addBidderToAuction);
router.delete("/:id", deleteAuction);
//
export const AuctionRoutes = router;
