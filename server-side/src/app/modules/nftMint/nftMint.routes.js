import express from "express";
import { getMintedNftByUserController, storeMintedNftController } from "./nftMint.controller.js";
import { validateRequest } from "../../middlewars/validateRequest.js";
import { storeMintedNftZodSchema } from "./nftMint.validation.js";


const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization);

router.post("/store-minted-nft", validateRequest(storeMintedNftZodSchema), storeMintedNftController);
router.get("/get-all-nft/:id", getMintedNftByUserController);


export const NftMintRoutes = router;