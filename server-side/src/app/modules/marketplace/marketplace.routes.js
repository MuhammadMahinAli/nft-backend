import express from "express";
import { getAllMarketPlaceByAdminController, getAllMarketPlaceController } from "./marketplace.controller.js";
const router = express.Router();


router.get("/getAllMarketPlaceByAdmin/:id", getAllMarketPlaceByAdminController);
router.get("/getAll", getAllMarketPlaceController);


export const MarketPlaceRoutes = router;