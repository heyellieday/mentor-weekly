const express = require("express");
const bodyParser = require("body-parser");

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
    .then(users => res.json(users.map(user => user.apiRepr())))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "something went horribly awry" });
    });
});

router.get("/:userId", (req, res) => {
  User.findById(req.params.userId)
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

  User.create({
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName
    },
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
    "creationDate",
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
  let mentorProfile;
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
      user.mentees.push(newMenteeId);
      return user.save();
    })
    .then(mentor => (updatedMentor = mentor.apiRepr()))
    .catch(err => res.status(500).json({ message: "Something went wrong" }));

  User.findById(req.params.menteeId)
    .then(user => {
      user.mentors.push(mentorId);
      return user.save();
    })
    .then(
      updatedMentee => res.sendStatus(201)
      //.json([updatedMentor, updatedMentee.apiRepr()])
    )
    .catch(err => res.status(500).json({ message: "Something went wrong" }));
});

module.exports = { router };
