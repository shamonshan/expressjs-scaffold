const postService = function postService(status){

    return new Promise((resolve,reject)=>{
        return (status)?resolve(true):reject(false);
    })
}

module.exports = {
    postService
}