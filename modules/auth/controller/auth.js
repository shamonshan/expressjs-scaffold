/*
* Load the service
*/
const { loginService } = require('../services/auth');

const signup = function signup(req, res) {
    res.status(200).json({
        text: 'Signup here'
    });
}

const login = function login(req, res) {

    /*
    *Invoke the service
    */
    let loginStatus = loginService({
        username: req.body.username,
        password: req.body.password
    });
    res.status(200).json({
        text: 'Login ' + loginStatus
    });
}

const profile = function profile(req, res) {
    res.json({
        text: 'Protected Profile here '
    })
}

module.exports = {
    signup, login, profile
}