import express from "express";
import { getAllSellLisController, getAllSellListBySellerController } from "./sellList.controller.js";
const router = express.Router();


router.get("/getAllSellListBySeller/:id", getAllSellListBySellerController);
router.get("/getAll", getAllSellLisController);


export const SellListRoutes = router;