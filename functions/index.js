const functions = require("firebase-functions");
const admin = require('firebase-admin'); 
admin.initializeApp();
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'MATTEMATICS';

exports.sendEmail = functions.firestore.document('/users/{documentId}')
  .onCreate(async (snap, context) => {
      
      const data = snap.data();
      const name = data.name;
      const email = data.email;
      const message = data.message;

      //the customers message going to me
      const mailOptions1 = {
        from: email,
        to: 'mattematics9@gmail.com',
        subject: `${name} has sent you a message!`,
        text: `${message}`
      };

      //the customers welcome email
      const mailOptions2 = {
        from: `${gmailEmail}`,
        to: `${email}`,
        subject: 'Mattematics Web Development',
        text: `Hello ${name}, thank you for reaching out to us.  We will be contacting you shortly!`
      }

      await mailTransport.sendMail(mailOptions1);
      await mailTransport.sendMail(mailOptions2);
      return Promise.resolve();
  });
