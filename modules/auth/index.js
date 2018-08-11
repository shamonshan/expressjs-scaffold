const express = require('express');
const router = express.Router();

/*
ES6 Object destructing
*/
const {login,signup} = require('./controller/auth');

router.get('/signup',signup);
router.post('/login',login);

modue.exports = router;
