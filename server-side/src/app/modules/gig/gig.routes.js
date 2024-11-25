import express from "express";
import {createGig, deleteGig, getAllGig, getSingleGig, updateGig} from "./gig.controller.js";
const router = express.Router();

router.post("/", createGig);
router.get("/getsingle/:id", getSingleGig);
router.get("/getAll/:id", getAllGig);
router.delete("/deleteGig/:id", deleteGig);
router.post("/updateGig", updateGig);
//
export const GigRoutes = router;
