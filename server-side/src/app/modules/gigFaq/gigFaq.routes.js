import express from "express";
import {getAllGigFaq, getSingleGigFaq} from "./gigFaq.controller.js";

const router = express.Router();

router.get("/getsingle/:id", getSingleGigFaq);
router.get("/getAll/:id", getAllGigFaq);

//
export const GigFaqRoutes = router;
