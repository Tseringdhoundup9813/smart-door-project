require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Router/productRouter");
const authRouter = require("./Router/auth");
const bodyParser = require('body-parser');
const errorHander = require("./middleware/error");

const app = express();

const cors= require("cors");
const { json } = require("body-parser");


app.use(cors());
app.use("/Uploads",express.static("Uploads"))
app.use(json());
app.use(Router,authRouter);


// error hander (should be  last piece of middleware)
app.use(errorHander);



// mongoose connection 
async function DATABASECONNECTION(){
    try{
        await  mongoose.connect(process.env.DB_CONNECTION);
        console.log("sucessfully connect to database");
 
    }catch(err){
        console.log(err);
    }

}
// 
DATABASECONNECTION();
const server = app.listen(process.env.PORT,() => {
    console.log(`Server started on port ${process.env.PORT}`);
});
process.on("unhandledRejection",(err,promise)=>{
    console.log(`logged Error:${err}`);
    server.close(()=>process.exit(1))
})


// connect to router
