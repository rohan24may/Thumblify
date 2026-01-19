import express from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
  logoutUser,
  googleAuth,
} from "../controllers/AuthControllers.js";
import protect from "../middlerwares/auth.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);

// ✅ Google login route
AuthRouter.post("/google", googleAuth);

AuthRouter.post("/logout", protect, logoutUser);
AuthRouter.get("/verify", protect, verifyUser);

console.log("AUTH ROUTES LOADED");

export default AuthRouter;
