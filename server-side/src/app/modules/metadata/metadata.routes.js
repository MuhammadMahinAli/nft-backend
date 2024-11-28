import express from "express";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createMetaDataZodSchema} from "./metadata.validation.js";
import {createMetaData} from "./metadata.controller.js";

const router = express.Router();

router.post("/", validateRequest(createMetaDataZodSchema), createMetaData);
//
export const MetaDataRoutes = router;
