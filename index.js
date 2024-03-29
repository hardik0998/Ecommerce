const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv= require('dotenv').config();
const PORT = process.env.PORT || 8000;
const authRoutes = require('./routes/authRoutes')
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api/user',authRoutes)

app.listen(PORT,()=>{
    console.log(`server started at Port number ${PORT}`);
})