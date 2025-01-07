const express = require("express");
const app = express()
const mongoose  = require('mongoose')
const dotenv = require("dotenv");
dotenv.config()
const LoginRouter = require('./router/Login')
const RegisterRouter = require('./router/Register')
const createTicketRouter = require('./router/NewTicketCreate')
const cors = require("cors");
app.use(cors());
const jwt = require('jsonwebtoken');
const {authenticateToken} = require('./middleware/authMiddleware')

app.use(express.json())
app.use( '/', LoginRouter)
app.use( '/register', RegisterRouter)
app.use('/createticket' , createTicketRouter)
// app.use(authenticateToken)

mongoose.connect(process.env.URL)
.then(()=>console.log('connected succefully'))
.catch((error)=> console.log('error', error))


app.listen(process.env.PORT || 7000 , ()=> console.log("server started"))
