const validator=require('validator')
const registerValidator= (req)=>{
    const {firstName,lastName,email,password}=req.body
    let error={}
    console.log(req.body)
    if(!firstName){
        error.firstName="First name required !!"
    }
    if(!lastName){
        error.lastName="Last name required !!"
    }
    if(!email){
        error.email="Email required !!"
    }else if(!validator.default.isEmail(req.body.email)){
        error.email="Email not valid!!"
    }
    if(!password){
        error.password="Password required !!"
    }
    return{
        isValid:Object.keys(error).length===0,
        error:error
    }
}
const loginValidator=(req)=>{
    let err={}
    if(!req.body.email){
        err.email="Email required !!!"
    } else if(!validator.default.isEmail(req.body.email)){
        err.email="Email not valid"
    }
    if(!req.body.password){
        err.password="Password required !!!"
    }
    return{
        isValid:Object.keys(err).length===0,
        err:err
    }
}
const postValidator=(req)=>{
    let err={}
    if(!req.body.title){
        err.title="Title Required"
    }
    if(!req.body.summary){
        err.summary="Summery Required"
    }
    if(!req.body.author){
        err.author="Author Name Requird"
    }
    
    return{
        isValid:Object.keys(err).length===0,
        err:err
    }
}
module.exports={
    loginValidator,
    registerValidator,
    postValidator
}