const express = require('express');
const bodyParser = require('body-parser');

const {User} = require('./models');

const router = express.Router();
const jsonParser = bodyParser.json();


router.get('/',(req, res) => {
  User
    .find()
    .populate("mentees")
    .populate("mentors")
    .then(users => res.json(users.map(user => user.apiRepr())))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly awry'});
    });
});

router.get('/:userId', (req, res) => {
  User
    .findById(req.params.userId)
    .populate("mentees")
    .populate("mentors")
    .then(user => {
      res.json(user.apiRepr());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went wrong with the server!'});
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

////The required fields will be everything but "logs" & "totalTimeInSeconds"
router.post('/', (req, res) => {
  const requiredFields = ['name', 'role', 'goals', 'experience', 'skills', 'organization', 'contact'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  User
    .create({
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
        res.status(500).json({error: 'Something went wrong'});
    });

});

router.delete('/:userId', (req, res) => {
  User
    .findByIdAndRemove(req.params.userId)
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.delete('/:mentorId/:menteeId', (req, res) => {
//remove self from mentee matchId list,
//then remove mentee from own matchId list,
//then respond with a success message
  User
    .findOneById(req.params.mentorId)
    .then(mentor => {
      for (let i=0; i<mentor.mentees.length; i++) {
        if (mentor.mentees[i] === req.params.menteeId) {
          mentor.mentees.splice(i, 1);
        }
      }
      return mentor.save();
    })
    .findOneById(req.params.menteeId)
    .then(mentee => {
      for (let i=0; i<mentee.mentors.length; i++) {
        if (mentee.mentors[i] === req.params.mentorId) {
          mentee.mentors.splice(i, 1);
        }
      }
      return mentee.save();
    })
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.put('/:userId',(req, res) => {
  if (!(req.params.userId && req.body.id && req.params.userId === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['name', 'photoUrl', 'creationDate', 'role', 'goals', 'experience', 'skills', 'organization', 'contact', 'portfolioUrl', 'lookingFor', 'background', 'availability', 'mentees', 'mentors'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  User
    .findByIdAndUpdate(req.params.userId, {$set: updated}, {new: true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

router.put('/:userId/:matchId', (req, res) => {
  //if body and param ids all match,
  //and body contains matchId,
  //add new mentee match id to own match list,
  //then add own id to your mentee's match list

  if (!(req.params.userId && req.body.userId && req.params.matchId === req.body.matchId)) {
    return res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const requiredFields = ['matchId'];

  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing 'matchId' in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

   let newmatchId = {
     matchId: req.params.matchId
   };
   let userId = {
     matchId: req.params.userId
   };
  User
    .findById(req.params.userId)
    .then(user => {
      user.matchId.push(newmatchId);
      return user.save()
    })
    .findById(req.params.matchId)
    .then(user => {
      user.matchId.push(userId);
      return user.save()
    })
    .then(updatedUser => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Something went wrong'})
    );
});

module.exports = {router};
