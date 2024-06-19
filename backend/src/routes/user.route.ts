import express from "express";
const router = express.Router();
import MyUserController from "../controllers/user.controller";

// /api/my/user
router.post("/", MyUserController.createCurrentUser);

export default router;
