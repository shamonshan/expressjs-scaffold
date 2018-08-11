const signup = function signup(req,res){
    res.send('Signup route');
}

const login = function login(req,res){
    res.send('Login route');
}

module.exports = {
    signup,login
}