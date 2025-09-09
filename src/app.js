const express = require('express');
const  userRoute = require('./routes/user.route.js')
const app = express();
const connectDataBase = require('./database/db.js')

connectDataBase();

app.use(express.json());
app.use('/', userRoute);

module.exports = app;