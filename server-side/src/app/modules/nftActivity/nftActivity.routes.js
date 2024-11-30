import express from "express";
import { getNftActivityByNftIdController,getNftActivityByIdController } from "./nftActivity.controller.js";
const router = express.Router();


router.get("/getNftActivityById/:id", getNftActivityByIdController);
router.get("/getNftActivityByNftId", getNftActivityByNftIdController);


export const NftActivityRoutes = router;