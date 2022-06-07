const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "example@gmail.com",
        pass: "password"
    },
    tls: {
        rejectUnauthorized: false
    }
});

 const mailOptions = {
        from: "example@gmail.com",
        to: "sending@gmail.com",
        subject: "Welcome to ",
        text: 'hai send from me',
    };

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("mail sent");
        }
    });