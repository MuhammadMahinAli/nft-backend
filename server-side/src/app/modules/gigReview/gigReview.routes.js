import express from "express";
import {addGigReview, deleteGigReview, getAllGigReview, getGigReviewByDesigner, getSingleGigReview, updateGigReview} from "./gigReview.controller.js";

const router = express.Router();
router.post("/", addGigReview);
router.get("/getsingle/:id", getSingleGigReview);
router.get("/getAll/:id", getAllGigReview);
router.get("/getByDesigner/:id", getGigReviewByDesigner);
router.post("/update", updateGigReview);
router.delete("/:id", deleteGigReview);

//
export const GigReviewRoutes = router;
