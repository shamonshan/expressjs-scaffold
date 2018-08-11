/*
Application parent routes are here
*/

const express = require('express');
const router = express.Router();

/*
* Parent route for the auth
*/
router.use('/auth',require('../modules/auth/index'));

/*
* Parent route for posts
*/
router.use('/post',require('../modules/post/index'));


module.exports = router;
