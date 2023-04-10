const mongoose = require("mongoose")
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserScheme = new mongoose.Schema({

    username:{
        type:String,
        required:[true,"please provide a  username"]
    },
    email:{
        type:String,
        required:[true,"please provide a  email"],
        match:[/^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "please provide a valid email"]
    },
    password:{
        type:String,
        required:[true,"please add a password"],
        minlenght:6,
        select:false,
    },
    verified:{
        type:Boolean,
        default:false,
    },
    admin:{
        type:Boolean,
        default:false,
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date,
});
UserScheme.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});
UserScheme.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password,this.password);
}

UserScheme.methods.getSignedToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}
UserScheme.methods.getResetPasswordToken=function(){
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
}
const User = mongoose.model("User",UserScheme);
module.exports = User;