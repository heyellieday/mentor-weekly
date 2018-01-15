const express = require('express');
const next = require('next');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const {CLIENT_ORIGIN} = require('./config');
//const {router: usersRouter} = require('./users');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use(morgan('common'));
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  //app.use('/users', usersRouter);
  // app.use(
  //     cors({
  //         origin: CLIENT_ORIGIN
  //     })
  // );

  app.get('/hello', (req, res) => {
    return res.status(200).json({
      hi: "world"
    })
  })


  app.get('*', (req, res) => {
    handle(req, res)
  })
  app.listen(3000)
})
