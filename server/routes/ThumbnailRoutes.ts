import express from "express";
import {
  deleteThumbnail,
  generateThumbnail,
  getMyThumbnails,
} from "../controllers/ThumbnailController.js";
import protect from "../middlerwares/auth.js";

const ThumbnailRouter = express.Router();

ThumbnailRouter.post("/generate", protect, generateThumbnail);
ThumbnailRouter.get("/my", protect, getMyThumbnails);
ThumbnailRouter.delete("/delete/:id", protect, deleteThumbnail);

export default ThumbnailRouter;
