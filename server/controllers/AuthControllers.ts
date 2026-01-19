import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * REGISTER USER
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    req.session.isLoggedIn = true;
    req.session.userID = newUser._id.toString();

    return res.json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * LOGIN USER
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password!);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    req.session.isLoggedIn = true;
    req.session.userID = user._id.toString();

    return res.json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * ✅ GOOGLE LOGIN
 */
export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: "Missing Google credential" });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload?.email) {
      return res.status(400).json({ message: "Google login failed" });
    }

    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = await User.create({
        name: payload.name || "Google User",
        email: payload.email,
        password: "", // no password for Google users
      });
    }

    req.session.isLoggedIn = true;
    req.session.userID = user._id.toString();

    return res.json({
      message: "Google login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error("Google login error:", error);
    return res.status(500).json({ message: error.message });
  }
};

/**
 * LOGOUT USER
 */
export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy((error: any) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
    return res.json({ message: "User logged out successfully" });
  });
};

/**
 * VERIFY USER
 */
export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.session;

    if (!userID) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findById(userID).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
