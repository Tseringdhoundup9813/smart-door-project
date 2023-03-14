const multer = require("multer");
// uuidv4 = require('uuid/v4');
// const path = require("path");



const storage = multer.diskStorage({
    
    destination:"Uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});

module.exports = upload;
