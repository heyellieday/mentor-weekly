const express = require('express');
const next = require('next');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {DATABASE_URL, PORT} = require('./config');
//const cors = require('cors');
//const {CLIENT_ORIGIN} = require('./config');
const {router: usersRouter} = require('./users');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use(morgan('common'));
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  app.use('/api/users', usersRouter);
  // app.use(
  //     cors({
  //         origin: CLIENT_ORIGIN
  //     })
  // );
  app.get('*', (req, res) => {
    handle(req, res)
  })
  function runServer(databaseUrl=DATABASE_URL, port=PORT) {
    return new Promise((resolve, reject) => {
      mongoose.connect(databaseUrl, {useMongoClient: true}, err => {
        if (err) {
          return reject(err);
        }
        server = app.listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
      });
    });
  }

  if (require.main === module) {
    runServer().catch(err => console.error(err));
  };
//  app.listen(3000)
})
