const signupService = function signupService(params){
    
}

const loginService = function loginService(params){
    //mock the DB
    if(params.username=='test'&&params.password =='test'){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    signupService,loginService
}