import express from "express";
import { getAllNftController, getNftByIdController } from "./nft.controller.js";
const router = express.Router();

router.get("/getNftById/:id", getNftByIdController);
router.get("/getAll", getAllNftController);


export const NftRoutes = router;