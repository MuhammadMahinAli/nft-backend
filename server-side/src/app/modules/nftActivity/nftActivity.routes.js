import express from "express";
import { getNftActivityByNftIdController,getNftActivityByIdController } from "./nftActivity.controller.js";
const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization("Seller", "Buyer"));

router.get("/getNftActivityById/:id", getNftActivityByIdController);
router.get("/getNftActivityByNftId/:id", getNftActivityByNftIdController);


export const NftActivityRoutes = router;