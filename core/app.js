const express = require('express')
const app = express();
const bodyParser = require('body-parser');

/*
* Load the configurations from .env 
*/
require('dotenv').config(process.cwd(), '.env')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
* Load the routes
*/

app.use('/', require('./route'));

/*
* 404 Error handler
*/
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/*
* Handle the application errors here
*/
app.use((err, req, res, next) => {

    console.log(err);
    res.status(err.status).json({
        title: err.message
    })
});

module.exports = {
    app
};