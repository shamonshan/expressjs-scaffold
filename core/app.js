const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next)=>{

	 res.json({
		 title:'Internal Server Error',
		 errors:'Internal Server Error Occured'
	 })
});


module.exports = app;