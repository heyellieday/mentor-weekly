const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { API_URL } = require("../config");
const { User } = require("./models");

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/", (req, res) => {
  User.find()
    .populate("mentees")
    .populate("mentors")
    .then(users => res.json(users.map(user => user.apiRepr())))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went horribly awry" });
    });
});

router.get("/pick-a-mentee", (req, res) => {
  User.find({ "mentors.0": { $exists: false }, role: "mentee" })
    .then(users => res.json(users.map(user => user.menteeApiRepr())))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went horribly awry" });
    });
});

router.get("/:authId", (req, res) => {
  console.log(req.params.authId);
  if (req.user.sub != req.params.authId) {
    console.error("intruder!");
  }

  User.findOne({ authId: req.params.authId })
    .populate("mentees")
    .populate("mentors")
    .then(user => {
      res.json(user.apiRepr());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went wrong with the server!" });
    });
});

// router.get('/:userId', (req, res) => {
//   Users
//     .findById(req.params.userId)
//     .then(users => {
//       res.json(users.map(user => user.apiRepr()));
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'something went wrong with the server!'});
//     });
// });

router.post("/", (req, res) => {
  const requiredFields = [
    "name",
    "authId",
    "role",
    "goals",
    "experience",
    "skills",
    "organization",
    "contact"
  ];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  User.findOne({ authId: req.body.authId }).then(user => {
    if (user) {
      return res.json({ message: "user already exists" });
    } else {
      User.create({
        name: {
          firstName: req.body.name.firstName,
          lastName: req.body.name.lastName
        },
        authId: req.body.authId,
        photoUrl: req.body.photoUrl,
        role: req.body.role,
        goals: req.body.goals,
        experience: req.body.experience,
        skills: req.body.skills,
        organization: req.body.organization,
        contact: req.body.contact,
        portfolioUrl: req.body.portfolioUrl,
        //mentor fields only
        lookingFor: req.body.lookingFor,
        //mentee fields only
        background: req.body.background,
        availability: req.body.availability
      })
        .then(user => res.status(201).json(user.apiRepr()))
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: "Something went wrong" });
        });
    }
  });
});

router.delete("/:userId", (req, res) => {
  User.findByIdAndRemove(req.params.userId)
    .then(() => {
      res.status(204).json({ message: "success" });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went terribly wrong" });
    });
});

router.delete("/:mentorId/:menteeId", (req, res) => {
  //remove mentor from mentee "mentors" list,
  //then remove mentee from mentors "mentees" list,
  //then respond with a success message
  User.findById(req.params.mentorId).then(mentor => {
    mentor.mentees.pull(req.params.menteeId);
    return mentor.save();
  });
  User.findById(req.params.menteeId)
    .then(mentee => {
      mentee.mentors.pull(req.params.mentorId);
      return mentee.save();
    })
    .then(() => {
      res.status(204).json({ message: "success" });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went terribly wrong" });
    });
});

router.put("/:userId", (req, res) => {
  if (
    !(req.params.userId && req.body.id && req.params.userId === req.body.id)
  ) {
    res.status(400).json({
      error: "Request path id and request body id values must match"
    });
  }

  const updated = {};
  const updateableFields = [
    "name",
    "photoUrl",
    "role",
    "goals",
    "experience",
    "skills",
    "organization",
    "contact",
    "portfolioUrl",
    "lookingFor",
    "background",
    "availability",
    "potentialMentees",
    "mentees",
    "mentors"
  ];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  User.findByIdAndUpdate(req.params.userId, { $set: updated }, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json({ message: "Something went wrong" }));
});

router.put("/:mentorId/:menteeId", (req, res) => {
  let mentor;
  let mentee;
  //if body and param ids all match,
  //add new mentee id to mentor "mentees" list,
  //then add mentor id to mentee's "mentors" list

  if (
    !(req.params.mentorId && req.body.id && req.params.mentorId === req.body.id)
  ) {
    return res.status(400).json({
      error: "Request path id and request body id values must match"
    });
  }

  let newMenteeId = req.params.menteeId;
  let mentorId = req.params.mentorId;
  let updatedMentor;
  User.findById(req.params.mentorId)
    .then(user => {
      mentor = user;
      user.mentees.push(newMenteeId);
      return user.save();
    })
    .then(mentor => (updatedMentor = mentor.apiRepr()))
    .catch(err => res.status(500).json({ message: "Something went wrong" }));

  User.findById(req.params.menteeId)
    .then(user => {
      mentee = user;
      user.mentors.push(mentorId);
      return user.save();
    })
    .then(() => {
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
    })
    .then(
      updatedMentee => res.sendStatus(201)
      //.json([updatedMentor, updatedMentee.apiRepr()])
    )
    .catch(err => res.status(500).json({ message: "Something went wrong" }));
});

module.exports = { router };
