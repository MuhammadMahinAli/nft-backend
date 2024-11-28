import express from "express";
import {createCollection, deleteCollection, getAllCollection, getSingleCollection, updateCollection} from "./collection.controller.js";
import {createCollectionZodSchema, updateCollectionZodSchema} from "./collection.validation.js";
import {validateRequest} from "../../middlewars/validateRequest.js";

const router = express.Router();

router.post("/", validateRequest(createCollectionZodSchema), createCollection);
router.get("/getAll", getAllCollection);
router.get("/getsingle/:id", getSingleCollection);
router.patch("/:id", validateRequest(updateCollectionZodSchema), updateCollection);
router.delete("/:id", deleteCollection);
//
export const CollectionRoutes = router;
