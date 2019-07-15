
const express = require('express');

const app = express();

const commitRoutes = require('./commitment');

 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/commitment', commitRoutes);

module.exports = app;