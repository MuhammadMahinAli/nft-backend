import express from "express";
import {createUser, deleteUser, getAllUsers, getSingleUser, updateUser} from "./user.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createUserZodSchema, updateUserZodSchema} from "./user.validation.js";
const router = express.Router();
import {authorization} from '../../middlewars/authorization.js'

router.use(authorization);

router.post("/signup", validateRequest(createUserZodSchema), createUser);
router.get("/getAll", getAllUsers);
router.get("/getsingle/:email", getSingleUser);
router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
router.delete("/:id", deleteUser);

export const UserRoutes = router;
