import express from 'express';
import userRoute from './routes/user.route.js'
import conn from'./database/db.js'

const app = express();

conn();

app.use(express.json());
app.use('/user', userRoute);

export default app;