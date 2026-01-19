import express from 'express';
import { getAllUsersThumbnail, getSingleUserThumbnail } from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.get('/thumbnails',getAllUsersThumbnail);
UserRouter.get('/thumbnail/:id',getSingleUserThumbnail);

export default UserRouter;