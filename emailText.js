require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
  });
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: 'sanket.jambhulkar.cse@ghrce.raisoni.net', // Change this to a valid email address
  subject: 'Test Email',
  text: 'This is a test email',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error: ', error);
  }
  console.log('Email sent: ', info.response);
});
