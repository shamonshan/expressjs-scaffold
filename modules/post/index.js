const express = require('express');
const router = express.Router();

/*
* Middleware from another module
*/
const {isLoggedUser} = require(process.cwd()+'/modules/auth/middleware/auth');

const {addPost,deletePost} = require('./controller/post');


/*
Middlwares for the routes post/*
*/
router.use(isLoggedUser);

router.post('/create',addPost);
router.delete('/delete',deletePost);

module.exports = router;