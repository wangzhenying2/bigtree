const nodemailer = require('nodemailer');

//配置邮件
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    secureConnection: true,
    port:465,
    auth: {
        user: '907631547@qq.com',
        pass: 'lklhbyymusdnbfgh',
    }
})

//发送邮件
let sendmail = function(obj) {
    var option = {
        from: '907631547@qq.com',
        to: '907631547@qq.com',
        subject: obj.subject,
        html: obj.html
    }
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("邮件发送失败: ", error);
        }else{
            console.log("邮件发送成功: ", response);
        }
    });
};

module.exports = sendmail;