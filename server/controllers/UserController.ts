import e, { Request, Response } from 'express';
import Thumbnail from '../models/thumbnail.js';
//Controllers to get all users Thumbnail
export const getAllUsersThumbnail = async (req: Request, res: Response) => {
    try {
        const{userID}=req.session;
        const thumbnails = await Thumbnail.find({ userID }).sort({ createdAt: -1 });
        res.json({thumbnails});

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: error.message });
        
    }
}

//controllers to get single thumbnail of a user
export const getSingleUserThumbnail = async (req: Request, res: Response) => {
    try {
        const{userID}=req.session;

        const {id}=req.params;
        const thumbnail = await Thumbnail.findOne({ userID, _id: id });
        res.json({thumbnail});
    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }}