const express = require("express");
const User = require("../Models/User");
const Token = require("../Models/Token")
const router = express.Router();

const authController = require("../Controllers/auth");


router.post("/register",authController.register);
router.post("/login",authController.login);
router.post("/forgetpassword",authController.forgetpassword);
router.post("/resetpassword",authController.resetpassword);
router.get("/verifyEmail/:id",authController.VerifyEmail);
router.get("/user/:id/verify/:token",async(req,res,next)=>{

    try{
        console.log(req.params.id);
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(200).json({message:"Invalid Link"})

        console.log(user);
        const token = await Token.findOne({userId:user._id,token:req.params.token });
        console.log(token);
 
        if(!token) return res.status(200).json({message:"Invalid Link"})

     
         await User.updateOne({_id:user._id,verified:true});
        //  await deleteOne(token);
        await Token.deleteOne({userId:user._id})
         res.status(200).json({message:"Email SucessFully Verified"})
       
        
           

    }catch(err){
        res.status(500).json({message:"Server   ERROR"})
        console.log(err);

    }
})

module.exports = router;



