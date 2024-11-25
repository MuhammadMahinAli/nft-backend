import express from "express";
import {getDesignerEarning, updateDesignerEarning} from "./designerEarning.controller.js";
const router = express.Router();

router.get("/designer/:id", getDesignerEarning);
router.post("/update", updateDesignerEarning);
//
export const DesignerEarningRoutes = router;
