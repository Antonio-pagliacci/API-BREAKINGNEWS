import express from 'express';
import dotenv from 'dotenv';
import conn from'./database/db.js'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();
conn();


const app = express();


app.use(express.json());
app.use('/user', userRoute);
app.use('/auth', authRoute);

export default app;