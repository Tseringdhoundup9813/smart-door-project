const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async(req,res,next)=>{
   let token;

    if( req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
        
       token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        return next(new ErrorResponse("not authorized to acess this route",401));
    }
    try{
       
        // console.log(process.env.JWT_SECRET)
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // console.log(decoded);

        const user = await User.findById(decoded.id);
        console.log(user);
        if(!user){
            console.log("user not found");
            return next(new ErrorResponse("No user found with this id",404))
        }else{
            console.log("user is found");
        }
        req.user = user
        next();
    }
    catch(err){
        return next(new ErrorResponse("Not  a authorized to acesss this route",404))
    }
}