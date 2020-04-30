// 'dotenv' require for the config with the DB which is inside the .env
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


// My entry Route
const indexRoute = require('./routes/index');

// Connect to the db
mongoose.connect('mongodb://localhost/'+process.env.DATABASE,
    { useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    }).then(()=>{
        console.log("DB CONEECTED!!");
});

// Using my Route
app.use('/',indexRoute);

// Set the port
const port = process.env.PORT || 8000;

// Listen to the port
app.listen(port, ()=>{
    console.log(`App is listen at port: ${port}`);
});