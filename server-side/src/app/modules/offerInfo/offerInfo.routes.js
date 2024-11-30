import express from "express";
import { getAllOfferInfoBySellIdController, getAllOfferInfoController, saveOfferInfoController } from "./offerInfo.controller.js";
const router = express.Router();

router.post("/create-new", saveOfferInfoController);
router.get("/getAllOfferBySellId/:id", getAllOfferInfoBySellIdController);
router.get("/getAll", getAllOfferInfoController);


export const OfferInfoRoutes = router;