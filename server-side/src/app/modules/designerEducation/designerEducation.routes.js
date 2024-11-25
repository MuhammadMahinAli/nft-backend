import express from "express";
import {addDesignerEducation, deleteDesignerEducation, getDesignerEducations} from "./designerEducation.controller.js";

const router = express.Router();
router.post("/", addDesignerEducation);
router.get("/designer/:id", getDesignerEducations);

router.post("/delete", deleteDesignerEducation);
//
export const DesignerEducationRoutes = router;
