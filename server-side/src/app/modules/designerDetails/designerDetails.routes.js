import express from "express";
import {createORUpdateDesignerDetails, deleteDesignerDetails, getDesignerDetails, updateDesignerDetails} from "./designerDetails.controller.js";
import {addORUpdateDesignerDetailsZodSchema} from "./designerDetails.validation.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
const router = express.Router();

router.post("/", validateRequest(addORUpdateDesignerDetailsZodSchema), createORUpdateDesignerDetails);
router.get("/getsingle/:id", getDesignerDetails);
router.delete("/:id", deleteDesignerDetails);
router.post("/updateDetails", updateDesignerDetails);
//
export const DesignerDetailsRoutes = router;
