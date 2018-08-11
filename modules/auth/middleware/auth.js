const isLoggedUser = function isLoggedUser(req, res, next) {

    //token validation
    if (req.headers.authorization == '1234') {
        next();
    } else {
        res.status(403).json({
            text: "Access forbidden"
        })
    }
}

module.exports = {
    isLoggedUser
}