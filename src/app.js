const express = require('express')
const app = express()
const TEAM_NAME = 'DeltaQuebec'


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//to access the database stored in MongoDB
var mongoose = require('mongoose');
User = require('./../models/index.js');
var database = 'mongodb://localhost:27017/TP'; 
mongoose.connect(database,function (err) {
    if(err) throw err;
        console.log('Connected to the database');
});

// API CRUD
const APIRoutes = require("./../api/routes");
app.use(APIRoutes);

module.exports = app
