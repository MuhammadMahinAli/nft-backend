import express from "express";
import {getAllGigPackage, getSingleGigPackage} from "./gigPackage.controller.js";

const router = express.Router();

router.get("/getsingle/:id", getSingleGigPackage);
router.get("/getAll/:id", getAllGigPackage);

//
export const GigPackagesRoutes = router;
