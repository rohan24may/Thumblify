import {Request,Response,NextFunction} from 'express';

const protect = (req:Request,res:Response,next:NextFunction) => {
    const{isLoggedIn , userID} = req.session;

    if(!isLoggedIn || !userID){
        return res.status(401).json({message:'Unauthorized access'});
    }
    next();
}

export default protect;