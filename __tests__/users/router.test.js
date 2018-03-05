/* eslint-env jest */
import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import AuthCallback from "../../pages/auth.js";
import { user } from "../../dummy-user";
import Auth from "../../services/auth";

const auth = new Auth();
const chai = require("chai");
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken");
const faker = require("faker");
const mongoose = require("mongoose");

const { app, runServer, closeServer } = require("../server");
const { User } = require("../../users/models");
const { TEST_DATABASE_URL } = require("../config");

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

// function seedTimerData() {
//   console.info("seeding Timer data");
//   const seedData = [];
//
//   for (let i = 1; i <= 10; i++) {
//     seedData.push(generateTimerData());
//   }
//   // this will return a promise
//   return Timer.insertMany(seedData);
// }
//
// // used to generate data to put in db
// function generateTimerData() {
//   return {
//     label: faker.lorem.word(),
//     category: faker.lorem.word(),
//     creationDate: faker.date.recent(),
//     projectNotes: faker.lorem.sentence(),
//     logs: [
//       {
//         seconds: faker.random.number(),
//         endDate: faker.date.recent()
//       },
//       {
//         seconds: faker.random.number(),
//         endDate: faker.date.recent()
//       }
//     ]
//   };
// }

function login() {
  // values stored in tests will also be available in
  //other tests unless you run localstorage.clear
  localStorage.clear();
  auth.login;
  auth.auth0.authorize({ nonce: "1234", responseType: "token id_token" });
  //auth.handleAuthentication();
}

function tearDownDb() {
  console.warn("Deleting database");
  return mongoose.connection.dropDatabase();
}

describe("Protected User API resource", function() {
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  after(function() {
    return closeServer();
  });

  beforeEach(function() {
    return seedTimerData();
  });

  afterEach(function() {
    return tearDownDb();
  });

  afterEach(function() {
    return User.remove({});
  });

  describe("/:authId", function() {
    it("Should reject requests with no jwt token", function() {
      return chai
        .request(app)
        .get(`/api/users/${req.user.sub}`)
        .then(() => expect.fail(null, null, "Request should not succeed"))
        .catch(err => {
          if (err instanceof chai.AssertionError) {
            throw err;
          }

          const res = err.response;
          expect(res).to.have.status(401);
        });
    });

    it("Should reject requests with an expired token", function() {
      login();
      const token = jwt.sign(
        {
          user: {
            username
          },
          exp: Math.floor(Date.now() / 1000) - 10 // Expired ten seconds ago
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username
        }
      );

      return chai
        .request(app)
        .get(`/api/users/${req.user.sub}`)
        .set("authorization", `Bearer ${auth.getAccessToken()}`)
        .then(() => expect.fail(null, null, "Request should not succeed"))
        .catch(err => {
          if (err instanceof chai.AssertionError) {
            throw err;
          }

          const res = err.response;
          expect(res).to.have.status(401);
        });
    });

    it("Should send protected data with valid jwt", function() {
      login();
      return chai
        .request(app)
        .get("/timers")
        .set("authorization", `Bearer ${auth.getAccessToken()}`)
        .then(res => {
          expect(res).to.have.status(200);
        });
    });

    it("should return all timer entries", function() {
      // strategy:
      //    1. get back all timer entries returned by by GET request to `/timers`
      //    2. prove res has right status, data type
      //    3. prove the number of entries we got back is equal to number
      //       in db.
      let res;
      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return chai
        .request(app)
        .get("/timers")
        .set("authorization", `Bearer ${auth.getAccessToken()}`)
        .then(function(_res) {
          res = _res;
          res.should.have.status(200);
          res.body.should.have.length.of.at.least(1);
          return Timer.count();
        })
        .then(function(count) {
          res.body.should.have.lengthOf(count);
        });
    });

    it("should return entries with right fields", function() {
      // Strategy: Get back all entries, and ensure they have expected keys

      let resTimer;
      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return chai
        .request(app)
        .get("/timers")
        .set("authorization", `Bearer ${auth.getAccessToken()}`)
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("array");
          res.body.should.have.length.of.at.least(1);

          res.body.forEach(function(timer) {
            timer.should.be.a("object");
            timer.should.include.keys(
              "id",
              "label",
              "category",
              "creationDate",
              "projectNotes",
              "totalTimeInSeconds"
            );
          });
          resTimer = res.body[0];
          return Timer.findById(resTimer.id);
        })
        .then(function(Timer) {
          resTimer.id.should.equal(Timer.id);
          resTimer.label.should.equal(Timer.label);
          resTimer.category.should.equal(Timer.category);
          resTimer.projectNotes.should.equal(Timer.projectNotes);
          resTimer.totalTimeInSeconds.should.equal(Timer.totalTimeInSeconds);
        });
    });
  });
  describe("POST endpoint", function() {
    // strategy: make a POST request with data,
    // then prove that the timer object we get back has
    // right keys, and that `id` is there (which means
    // the data was inserted into db)
    it("should add a new timer", function() {
      let mostRecentTimer;
      const newTimer = generateTimerData();
      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return chai
        .request(app)
        .post("/timers")
        .set("authorization", `Bearer ${auth.getAccessToken()}`)
        .send(newTimer)
        .then(function(res) {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.include.keys(
            "id",
            "label",
            "category",
            "creationDate",
            "projectNotes",
            "totalTimeInSeconds"
          );
          res.body.totalTimeInSeconds.should.equal(0);
          res.body.id.should.not.be.null;
          res.body.label.should.equal(newTimer.label);
          res.body.category.should.equal(newTimer.category);
          res.body.projectNotes.should.equal(newTimer.projectNotes);
          return Timer.findById(res.body.id);
        })
        .then(function(Timer) {
          Timer.label.should.equal(newTimer.label);
          Timer.category.should.equal(newTimer.category);
          Timer.projectNotes.should.equal(newTimer.projectNotes);
        });
    });
  });

  describe("PUT endpoints", function() {
    // strategy:
    //  1. Get an existing timer from db
    //  2. Make a PUT request to update that timer
    //  3. Prove timer returned by request contains data we sent
    //  4. Prove timer in db is correctly updated
    it("should update fields you send over", function() {
      const updateData = {
        label: "fofofofofofofof",
        category: "futuristic landscape"
      };

      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return Timer.findOne()
        .then(function(timer) {
          updateData.id = timer.id;

          // make request then inspect it to make sure it reflects
          // data we sent
          return chai
            .request(app)
            .put(`/timers/${timer.id}`)
            .set("authorization", `Bearer ${auth.getAccessToken()}`)
            .send(updateData);
        })
        .then(function(res) {
          res.should.have.status(200);
          return Timer.findById(updateData.id);
        })
        .then(function(timer) {
          timer.label.should.equal(updateData.label);
          timer.category.should.equal(updateData.category);
        });
    });

    it("should update logs by appending new entry to array", function() {
      let timer;
      const newLogEntry = {
        seconds: 120,
        endDate: new Date()
      };
      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return Timer.findOne()
        .then(function(_timer) {
          timer = _timer;
          newLogEntry.timerId = timer.id;
          return chai
            .request(app)
            .put(`/timers/${timer.id}/log`)
            .set("authorization", `Bearer ${auth.getAccessToken()}`)
            .send(newLogEntry);
        })
        .then(function(res) {
          res.should.have.status(204);
          return Timer.findById(timer.id);
        })
        .then(function(updatedTimer) {
          updatedTimer.logs[updatedTimer.logs.length - 1].seconds.should.equal(
            newLogEntry.seconds
          );
          updatedTimer.logs
            .reduce(function(totalTimeInSeconds, log) {
              return totalTimeInSeconds + log.seconds;
            }, 0)
            .should.equal(timer.totalTimeInSeconds + newLogEntry.seconds);
        });
    });
  });

  describe("DELETE endpoint", function() {
    // strategy:
    //  1. get a timer document
    //  2. make a DELETE request for that timer's id
    //  3. assert that response has right status code
    //  4. prove that timer with the id doesn't exist in db anymore
    it("deletes a timer by id", function() {
      let timer;
      const token = jwt.sign(
        {
          user: {
            username
          }
        },
        JWT_SECRET,
        {
          algorithm: "HS256",
          subject: username,
          expiresIn: "7d"
        }
      );

      return Timer.findOne()
        .then(function(_timer) {
          timer = _timer;
          return chai
            .request(app)
            .delete(`/timers/${timer.id}`)
            .set("authorization", `Bearer ${auth.getAccessToken()}`);
        })
        .then(function(res) {
          res.should.have.status(204);
          return Timer.findById(timer.id);
        })
        .then(function(_timer) {
          should.not.exist(_timer);
        });
    });
  });
});
