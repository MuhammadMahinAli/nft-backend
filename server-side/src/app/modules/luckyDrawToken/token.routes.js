import express from "express";
import {createLuckyDrawToken, getSingleLuckyToken, updateSpin} from "./token.controller.js";

const router = express.Router();

router.post("/", createLuckyDrawToken);
// router.get("/getAll", getAllLuckyDraw);
router.get("/getSingle", getSingleLuckyToken);
router.post("/updateSpin", updateSpin);

// router.delete("/:id", deleteLuckyDraw);
//
export const LuckyDrawTokenRoutes = router;
