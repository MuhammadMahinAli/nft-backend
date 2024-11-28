import express from "express";
import { getAllOfferInfoBySellIdController, getAllOfferInfoController } from "./offerInfo.controller.js";
const router = express.Router();


router.get("/getAllOfferBySellId/:id", getAllOfferInfoBySellIdController);
router.get("/getAll", getAllOfferInfoController);


export const OfferInfoRoutes = router;