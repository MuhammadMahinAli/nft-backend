import express from "express";
import {addDesignerCertificate, deleteDesignerCertificate, getDesignerAllCertificates} from "./designerCertificate.controller.js";

const router = express.Router();

router.get("/designer/:id", getDesignerAllCertificates);
router.post("/delete", deleteDesignerCertificate);
router.post("/", addDesignerCertificate);
//
export const DesignerCertificateRoutes = router;
