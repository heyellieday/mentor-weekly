const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {User} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();


router.get('/',
passport.authenticate('jwt', {session: false}), (req, res) => {
  Timer
    .find({user: req.user.id})
    .then(timers => {
      res.json(timers.map(timer => timer.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went wrong with the server!'});
    });
});

router.get('/:id',
passport.authenticate('jwt', {session: false}), (req, res) => {
  Timer
    .findById(req.params.id)
    .then(timer => res.json(timer.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly awry'});
    });
});

////The required fields will be everything but "logs" & "totalTimeInSeconds"
router.post('/',
passport.authenticate('jwt', {session: false}), (req, res) => {
  const requiredFields = ['label'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Timer
    .create({
      label: req.body.label,
      category: req.body.category,
      creationDate: req.body.creationDate,
      projectNotes: req.body.projectNotes,
      user: req.user.id
    })
    .then(timer => res.status(201).json(timer.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });

});

router.delete('/:id',
passport.authenticate('jwt', {session: false}), (req, res) => {
  Timer
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

router.put('/:id',
passport.authenticate('jwt', {session: false}), (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['label', 'category', 'creationDate', 'projectNotes'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Timer
    .findByIdAndUpdate(req.params.id, {$set: updated}, {new: true})
    .then(updatedTimer => res.json(updatedTimer))
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

router.put('/:timerId/log',
passport.authenticate('jwt', {session: false}), (req, res) => {

  if (!(req.params.timerId && req.body.timerId && req.params.timerId === req.body.timerId)) {
    return res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }


  const requiredFields = ['seconds', 'endDate'];

  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

   let newLogEntry = {
     seconds: req.body.seconds,
     endDate: req.body.endDate
   };

  Timer
    .findById(req.params.timerId)
    .then(timer => {
      timer.logs.push(newLogEntry);
      return timer.save()
    })
    .then(updatedTimer => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
});

module.exports = {router};
