import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";

const routes = Router();


routes.post("/user/register",registerUser)


export default routes