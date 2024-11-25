import express from "express";
import {createDesignerPortfolio, deleteDesignerPortfolio, getDesignerAllPortfolios, getDesignerSinglePortfolio, updateDesignerPortfolio} from "./designerPortfolio.controller.js";
const router = express.Router();

router.post("/", createDesignerPortfolio);
router.get("/getsingle/:id", getDesignerSinglePortfolio);
router.get("/getAll/:id", getDesignerAllPortfolios);
router.delete("/:id", deleteDesignerPortfolio);
router.post("/updatePortfolio", updateDesignerPortfolio);
//
export const DesignerPortfolioRoutes = router;
