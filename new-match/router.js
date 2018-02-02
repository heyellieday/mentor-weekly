const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const router = express.Router();
const jsonParser = bodyParser.json();

//import MatchInfo from "../components/match-info";

router.post("/", (req, res) => {
  console.log(req.body);

  const msg = {
    to: process.env.ADMIN_EMAIL,
    from: "admin@mentorweekly.com",
    subject: "You've been matched!",
    text: "You've been matched!",
    html: `<div>
            <h1>You've been matched!</h1>
            <hr>

            <p><a>Go to your dashboard</a> to see their full profile.</p>
            <p>
              If you have questions, feel free to
              <a href="https://mentorweekly.auth0.com/login">log in</a>
              and email us through the
              <a href="${API_URL}/help">Help Page<a/>
            </p>
            <br/>
            <p>Happy Learning!</p>
            <br/>
            <p>Best Wishes,</p>
            <p><b>Mentor Weekly</b></p>
          </div>`
  };

  sgMail.send(msg);
  res.status(201).json({ message: "email sent" });
});

module.exports = { router };
