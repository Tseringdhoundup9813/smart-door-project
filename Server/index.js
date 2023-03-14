require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Router/productRouter");
const bodyParser = require('body-parser')
const app = express();

const cors= require("cors");
const { json } = require("body-parser");


app.use(cors());
app.use("/Uploads",express.static("Uploads"))
app.use(json());
app.use(Router);


async function DATABASECONNECTION(){
    try{
        await  mongoose.connect(process.env.DB_CONNECTION);
        console.log("sucessfully connect to database");
 
    }catch(err){
        console.log(err);
    }

}
DATABASECONNECTION();
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});



// connect to router
