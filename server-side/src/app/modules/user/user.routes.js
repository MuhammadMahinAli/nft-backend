import express from "express";
import {createUser, deleteUser, getAllUsers, getSingleUserByRole, getSingleUser, updateUser, getSingleUserById} from "./user.controller.js";
import {validateRequest} from "../../middlewars/validateRequest.js";
import {createUserZodSchema, updateUserZodSchema} from "./user.validation.js";
const router = express.Router();

router.post("/signup", validateRequest(createUserZodSchema), createUser);
router.get("/getAll", getAllUsers);
router.get("/getsingle/:email", getSingleUser);
router.get("/getsingleById/:id", getSingleUserById);
router.get("/getuserbyRole/:role", getSingleUserByRole);
router.patch("/:id", validateRequest(updateUserZodSchema), updateUser);
router.delete("/delete/:id", deleteUser);
//
export const UserRoutes = router;
