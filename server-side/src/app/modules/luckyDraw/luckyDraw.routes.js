import express from "express";
import {addORDeleteParticipantToLuckyDraw, addOrDeleteProductToLuckyDraw, createLuckyDraw, deleteLuckyDraw, setWinnerToLuckyDraw} from "./luckyDraw.controller.js";
import {createLuckyDrawZodSchema} from "./luckyDraw.validation.js";
import {validateRequest} from "../../middlewars/validateRequest.js";

const router = express.Router();

router.post("/", validateRequest(createLuckyDrawZodSchema), createLuckyDraw);
router.post("/addProduct", addOrDeleteProductToLuckyDraw);
router.post("/deleteProduct", addOrDeleteProductToLuckyDraw);
router.post("/addParticipant", addORDeleteParticipantToLuckyDraw);
router.post("/deleteParticipant", addORDeleteParticipantToLuckyDraw);
router.post("/setWinner", setWinnerToLuckyDraw);
router.delete("/:id", deleteLuckyDraw);
//
export const LuckyDrawRoutes = router;
