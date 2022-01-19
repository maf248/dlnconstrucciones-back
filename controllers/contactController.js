const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

module.exports = {
  contact: (req, res, next) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        var transporter = nodemailer.createTransport({
          host: process.env.NODEMAILER_HOST,
          port: process.env.NODEMAILER_PORT,
          secure: true,
          auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
          },
        });

        var mailOptions = {
          from: `${process.env.NODEMAILER_USER}`,
          to: `${req.body.email}`,
          subject: "Sending Email using Node.js",
          text: `${req.body.comment}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }

      main()
        .then(
          res.json({
            meta: {
              status: 200,
            },
            data: {
              email: req.body.email,
              comment: req.body.comment,
              message: "Email Sent Correctly",
            },
          })
        )
        .catch(console.error);
    } else {
      return res.json({
        meta: {
          status: 400,
        },
        data: {
          errors: errors.errors,
          body: req.body,
        },
      });
    }
  },
};
