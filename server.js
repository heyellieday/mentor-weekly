const express = require("express");
const next = require("next");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { API_AUDIENCE, API_URL, PORT } = require("./config");

const { router: usersRouter } = require("./users");
const { router: helpRouter } = require("./help");

const app = express();
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://mentor-weekly.auth0.com/.well-known/jwks.json"
  }),
  audience: API_AUDIENCE,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ["RS256"]
});

mongoose.Promise = global.Promise;

nextApp.prepare().then(() => {
  app.use(morgan("common"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api/users", jwtCheck, usersRouter);
  app.use("/api/help", jwtCheck, helpRouter);

  app.get("*", (req, res) => {
    handle(req, res);
  });
});

let server;

function runServer(databaseUrl = process.env.DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, { useMongoClient: true }, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
        .on("error", err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
