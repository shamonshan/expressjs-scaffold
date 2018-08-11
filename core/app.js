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
* Handle the application errors here
*/
app.use((err, req, res, next) => {

    res.json({
        title: 'Internal Server Error',
        errors: 'Internal Server Error Occured'
    })
});

module.exports = {
    app
};