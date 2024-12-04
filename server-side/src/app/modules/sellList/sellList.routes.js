import express from "express";
import { getAllSellLisController, getAllSellListBySellerController } from "./sellList.controller.js";
const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization("Seller", "Buyer"));
router.get("/getAllSellListBySeller/:id", getAllSellListBySellerController);
router.get("/getAll", getAllSellLisController);


export const SellListRoutes = router;