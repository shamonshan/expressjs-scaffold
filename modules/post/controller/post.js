const { postService } = require('../services/post');

/*
* ES7 async await simple example
*/
const addPost = async function addPost(req, res, next) {

    try {
        let result = await postService(true);

        res.json({
            text: 'Post created successfully'
        });
    } catch (e) {
        /*
        * Throw the error to error handler which is in core/app.js
        */
        let err = new Error('Internal error');
        err.status = 500;
        next(err);
    }

}

const deletePost = function deletePost(req, res) {
    res.json({
        text: 'Post deleted'
    })
}


module.exports = {
    addPost, deletePost
}