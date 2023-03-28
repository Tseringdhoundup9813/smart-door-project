const User = require("../Models/User");
const ErrorResponse = require("../utils/errorResponse");


exports.register =async (req,res,next)=>{
    const {username,email,password} = req.body;
    try{
         const isEmail = await User.findOne({email});
         const isUsername = await User.findOne({username});
        
        if(isEmail){
            res.status(200).json({message:"email is already exsits"}) 
        }
        else if(isUsername){
            res.status(200).json({message:"username is already exsits"})

        }
        else{
            const user = await User.create({username,email,password});
            sendToken("successfully singup",user,201,res)
        }
      
    
    }catch(err){
    //    next(err);
       res.status(404).json({message:"network err"})

  
    }
    
}

exports.login = async (req,res,next)=>{
    const{email,password} = req.body;
    if(!email||!password){
    //    return next(new ErrorResponse("please provide email and password"));
        res.status(200).json({message:"please fill email and password"})
    }
  
    try{
        const user = await User.findOne({email}).select("+password");
        if(!user){
    
            res.status(200).json({message:"please enter correct validation"})
        }

        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
           
            res.status(200).json({message:"please enter correct validation"})

        }
        sendToken("sucessfully login",user,user.username,user._id,200,res);

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


const sendToken = (msg,user,username,id,statusCode,res,)=>{
   const token = user.getSignedToken();
   res.status(statusCode).json({message:msg,success:true,token,username,id})
}