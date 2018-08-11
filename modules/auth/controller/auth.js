const signup = function signup(req,res){
    res.status(200).json({
        text:'Signup here'
    });
}

const login = function login(req,res){
    res.status(200).json({
        text:'Login here'
    });
}

const profile = function profile(req,res){
     res.json({
         text:'Protected Profile here '
     })
}

module.exports = {
    signup,login,profile
}