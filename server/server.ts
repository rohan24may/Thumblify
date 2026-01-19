import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import connectDB from './config/db.js';
import AuthRouter from './routes/authRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRoutes.js';
import UserRouter from './routes/UserRoutes.js';

// Extend session types
declare module 'express-session' {
  interface SessionData {
    isLoggedIn?: boolean;
    userID?: string;
  }
}

// Connect DB
await connectDB();

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:4000'],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI as string,
      collectionName: 'sessions',
    }),
  })
);

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Live!');
});

console.log('AUTH ROUTER MOUNTED', AuthRouter.stack?.length);

app.use('/api/auth',AuthRouter);
app.use('/api/thumbnail',ThumbnailRouter);
app.use('/api/user',UserRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
