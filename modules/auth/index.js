const express = require('express');
const router = express.Router();

/*
*ES6 Object destructing
*/
const {login,signup,profile} = require('./controller/auth');

/*
* Middlewares
*/

const {isLoggedUser } = require('./middleware/auth');

router.get('/signup',signup);
router.get('/login',login);

/*
* Middlware only for /profile route
*/
router.get('/profile',isLoggedUser,profile);

module.exports = router;
