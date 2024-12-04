import express from "express";
import {createOfferZodSchema} from "./offer.validation.js";
import {addBidderToOffer, createOffer, deleteOffer} from "./offer.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";

const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization("Seller", "Buyer"));
router.post("/", validateRequest(createOfferZodSchema), createOffer);
router.post("/addBidder/:id", addBidderToOffer);
router.delete("/:id", deleteOffer);
//
export const OfferRoutes = router;
