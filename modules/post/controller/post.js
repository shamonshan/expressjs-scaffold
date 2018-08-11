const addPost = function addPost(req,res){
    res.json({
        text:'Post created successfully'
    });
}

const deletePost = function deletePost(req,res){
    res.json({
        text:'Post deleted'
    })
}


module.exports = {
    addPost,deletePost
}