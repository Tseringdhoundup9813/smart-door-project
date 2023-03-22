const User = require("../Models/User");
const ErrorResponse = require("../utils/errorResponse");


exports.register =async (req,res,next)=>{
    const {username,email,password} = req.body;
    try{
        const user = await User.create({username,email,password});
        sendToken(user,201,res)
    
    }catch(err){
       next(err);
    }
    
}

exports.login = async (req,res,next)=>{
    const{email,password} = req.body;
    if(!email||!password){
       return next(new ErrorResponse("please provide email and password"));
    }
    try{
        const user = await User.findOne({email}).select("+password");
        if(!user){
             return next(new ErrorResponse("please enter a valid email",401));
            
        }
        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
            return next(new ErrorResponse("please provide a correct password",401));
            

        }
        sendToken(user,200,res)

    }catch(err){
       
        next(err);
    }

}

exports.forgetpassword = async(req,res,next)=>{
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return next(new ErrorResponse("Email could not be sent"))
        }
        const restToken = user.resetPasswordToken();
        await user.save();
        const resetUrl =  `http://localhost:3000/passwordreset/${resetToken}`
        const message = `<h1>You have requested a password reset</h1>
        <p>please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`

    }catch(err){

    }
}

exports.resetpassword = (req,res,next)=>{
    res.send("resetpassword");
}


const sendToken = (user,statusCode,res)=>{
   const token = user.getSignedToken();
   res.status(statusCode).json({sucess:true,token})
}