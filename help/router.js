const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/", (req, res) => {
  console.log(req.body);
  const requiredFields = ["firstName", "lastName", "email", "subject", "issue"];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const msg = {
    to: process.env.ADMIN_EMAIL,
    from: "help@mentorweekly.com",
    subject: req.body.subject,
    //text: "and easy to do anywhere, even with Node.js",
    html: `<div>
            <p><b>You received an email from Mentor Weekly's Help Center:</b></p>
            <hr>
            <p><b>from: </b>${req.body.firstName} ${req.body.lastName} at ${
      req.body.email
    }</p>
            <p><b>subject: </b>${req.body.subject}</p>
            <p><b>issue: </b>${req.body.issue}</p>
          </div>`
  };
  sgMail.send(msg);
  res.status(201).json({ message: "email sent" });
});

module.exports = { router };
