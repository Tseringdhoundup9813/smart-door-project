const ErrorResponse=  require("../utils/errorResponse");

const errorHandler = (err,req,res,next)=>{
    let error  = {...err};
    error.message = err.message

    if(err.code == 11000){
        const message =`Duplicate field value Enter`;
        error = new ErrorResponse(message,400);
    }
    if(err.name == "ValidationError"){
        const message = object.value(err.errors).map((val)=>{val.message})
        error = new ErrorResponse(message,400);
    }
    res.status(err.status || 500).json({
        sucess:false,
        error:error.message||"Server Error",
    })
}

module.exports = errorHandler;