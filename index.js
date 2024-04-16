const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/user-routes');
const expenseRoutes = require('./src/routes/expense-routes');
const authModule = require('./src/middlewares/auth');
var cors = require('cors')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.use(cors())
app.use(express.json())
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/tracker', authModule.verifyAuthToken, expenseRoutes)

module.exports = app