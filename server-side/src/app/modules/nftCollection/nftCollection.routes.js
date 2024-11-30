import express from "express";
import {getAllNftCollectionController,getNftCollectionByIdController } from './nftCollection.controller.js'
const router = express.Router();


router.get("/getNftCollectionById/:id", getNftCollectionByIdController);
router.get("/getAll", getAllNftCollectionController);


export const NftCollectionRoutes = router;