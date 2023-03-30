const nodemailer = require("nodemailer");


module.exports = async(email,subject,text)=>{
        try{
            const transporter = nodemailer.createTransport({
                // host:process.env.HOST,
                service:"gmail",
                // post:process.env.PORT,
                // secure:process.env.SECURE,

                auth:{
                    user:process.env.USER,
                    pass:process.env.PASS
                }

            });
            await transporter.sendMail({
                from:process.env.USER,
                to:email,
                subject:subject,
                text:text

            });
            console.log("email send sucessfully");

        }catch(err){
            console.log("Email is not send");
            console.log(err);
        }
}

