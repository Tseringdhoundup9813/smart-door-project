const nodemailer = require("nodemailer");


const sendEmail = (option)=>{
    const transporter = nodemailer.createTransport({
        service:process.env.EMAIL_SERVICE,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD,
        }
    })
    const mailOption = {
        from:process.env.EMAIL_FROM,
        to:option.to,
        subject:option.subject,
        html:option.text,
    }
    transporter.sendMail(mailOption,function(err,inf){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}

module.exports = sendEmail;