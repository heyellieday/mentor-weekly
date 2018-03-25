/* eslint-env jest */

import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import AuthCallback from "../../pages/auth.js";
import Auth from "../../services/auth";

const auth = new Auth();
const chai = require("chai");
const chaiHttp = require("chai-http");
const jest = require("jest");
const faker = require("faker");
const mongoose = require("mongoose");

const { app, runServer, closeServer } = require("../../server");
const { User } = require("../../users/models");
const { TEST_DATABASE_URL, PORT } = require("../../config");
let testMentor;
let testMentee;

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

function generateFakeMentor() {
  return {
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    authId: "auth0|5",
    photoUrl: "",
    role: "mentor",
    goals: faker.lorem.word(),
    experience: faker.lorem.sentence(),
    skills: faker.lorem.sentence(),
    organization: faker.lorem.word(),
    contact: `${faker.name.firstName()}@gmail.com`,
    portfolioUrl: `github.com/${faker.name.firstName()}`,
    lookingFor: faker.lorem.sentence()
  };
}

function generateFakeMentee() {
  return {
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    authId: "auth0|6",
    photoUrl: "",
    role: "mentee",
    goals: faker.lorem.word(),
    experience: faker.lorem.sentence(),
    skills: faker.lorem.sentence(),
    organization: faker.lorem.word(),
    contact: `${faker.name.firstName()}@gmail.com`,
    portfolioUrl: `github.com/${faker.name.firstName()}`,
    background: faker.lorem.sentence(),
    availability: faker.lorem.sentence()
  };
}

function createTestMentor() {
  const newMentor = generateFakeMentor();
  testMentor = newMentor;
    console.log(`TEST MENTOR: ${JSON.stringify(testMentor)}`);
  return User.create(newMentor)
    .then((user) => console.log(user.authId));
  console.log(localStorage.getItem("access_token"));

}

function createTestMentee() {
  const newMentee = generateFakeMentee();
  testMentee = newMentee;
  return User
    .post("/")
    .send(newMentee);
}

function login() {
  const authResult = {
    accessToken: "mock-access-token",
    idToken: "mock-id-token"
  };
  // values stored in tests will also be available in
  //other tests unless you run localstorage.clear
  localStorage.clear();
  auth.login;
  auth.auth0.authorize({ nonce: "1234", responseType: "token id_token" });
  auth.handleAuthentication();
}

function tearDownDb() {
  console.warn("Deleting database");
  return mongoose.connection.dropDatabase();
}

describe("Protected User API resource", function() {

  beforeAll(function() {
    console.log("run server");
    return runServer(TEST_DATABASE_URL, PORT);
  });

  afterAll(function() {
    console.log("close server");
    return closeServer();
  });

  afterEach(function() {
    console.log("remove user and db");
    testMentor = "";
    testMentee = "";
    tearDownDb();
  });

  // afterEach(function() {
  //   console.log("removing db");
  //   return tearDownDb();
  // });

  // afterEach(function() {
  //   console.log("close server");
  //   return closeServer;
  // });

  describe("/:authId", function() {
    it("Should reject requests wrong auth id", function() {
      let req = createTestMentor();
      req.user = {};
      req.user.sub = "auth0|5";
      const badId = "123abc";
    //  login();
      return chai
        .request(app)
        .get(`/api/users/${badId}`)
        .send(req)
        .then(() => expect.fail(null, null, "Request should not succeed"))
        .catch(err => {
          if (err instanceof chai.AssertionError) {
            throw err;
          }
          const res = err.response;
          expect(res).to.have.status(404);
        });
    });

    it("Should accept requests correct auth id", function() {
      let req = createTestMentor();
      req.user = {};
      req.user.sub = "auth0|5";
    //  login();
      return chai
        .request(app)
        .get(`/api/users/${req.user.sub}`)
        .send(req)
        .then((res) => expect(res).to.have.status(200))
        .catch(err => console.log(`TEST ERROR: ${err.error}`));
        });
    });

  });
  describe("POST endpoint", function() {
    // strategy: make a POST request with data,
    // then prove that the user object we get back has
    // right keys, and that `id` is there (which means
    // the data was inserted into db)
    it("should add a new user", function() {
      const newMentor = generateFakeMentor();
      return chai
        .request(app)
        .post("/")
        .send(newMentor)
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.include.keys(
            "id",
            "name",
            "authId",
            "photoUrl",
            "role",
            "goals",
            "experience",
            "skills",
            "organization",
            "contact",
            "portfolioUrl",
            "lookingFor"
          );
          res.body.id.should.not.be.null;
          console.log(`RES: ${res}`);
          res.body.name.should.deep.equal({
            firstName: newMentor.name.firstName,
            lastName: newMentor.name.lastName
          });
          res.body.authId.should.equal(newMentor.authId);
          res.body.photoUrl.should.equal(newMentor.photoUrl);
          res.body.role.should.equal(newMentor.role);
          res.body.goals.should.equal(newMentor.goals);
          res.body.experience.should.equal(newMentor.experience);
          res.body.skills.should.equal(newMentor.skills);
          res.body.organization.should.equal(newMentor.organization);
          res.body.contact.should.equal(newMentor.contact);
          res.body.portfolioUrl.should.equal(newMentor.portfolioUrl);
          res.body.photoUrl.should.equal(newMentor.photoUrl);
          res.body.lookingFor.should.equal(newMentor.lookingFor);
        })
        .catch(err => console.log(`TEST ERROR: ${err.error}`));
    });

  });

  describe("PUT endpoints", function() {
  });

  describe("DELETE endpoint", function() {

      // it("should delete a user from the db", function() {
      //   const newMentor = createTestMentor();
      //   return chai
      //     .request(app)
      //     .delete(`/auth0|5}`)
      //     .then(function(res) {
      //       res.should.have.status(204);
      //       res.body.should.deep.equal({ message: "successfully deleted" });
      //     });
      // });

  });
