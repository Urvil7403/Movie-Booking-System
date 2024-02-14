import { getAllUsers, signup } from "../controllers/user-controller";
import express from "express";

const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);

export default userRouter;