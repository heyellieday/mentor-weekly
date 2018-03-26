const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    firstName: { type: String },
    lastName: { type: String }
  },
  authId: { type: String, unique: true },
  photoUrl: { type: String, default: "/static/default-profile.png" },
  creationDate: { type: String, default: new Date() },
  role: { type: String, enum: ["mentor", "mentee"] },
  goals: { type: String},
  experience: { type: String},
  skills: { type: String},
  organization: { type: String },
  contact: { type: String },
  portfolioUrl: { type: String },
  mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  //mentor fields only
  lookingFor: { type: String },
  //mentee fields only
  background: { type: String },
  availability: { type: String }
});

userSchema.methods.apiRepr = function() {
  let userdata = {
    id: this._id,
    authId: this.authId,
    name: this.name,
    photoUrl: this.photoUrl,
    creationDate: this.creationDate,
    role: this.role,
    goals: this.goals,
    experience: this.experience,
    skills: this.skills,
    organization: this.organization,
    contact: this.contact,
    portfolioUrl: this.portfolioUrl,
    mentees: this.mentees,
    mentors: this.mentors
  };
  if (this.role === "mentor") {
    userdata.potentialMentees = this.potentialMentees;
    userdata.lookingFor = this.lookingFor;
  } else {
    userdata.background = this.background;
    userdata.availability = this.availability;
  }
  return userdata;
};

userSchema.methods.menteeApiRepr = function() {
  let userdata = {
    id: this._id,
    authId: this.authId,
    name: this.name,
    photoUrl: this.photoUrl,
    creationDate: this.creationDate,
    role: this.role,
    goals: this.goals,
    experience: this.experience,
    skills: this.skills,
    organization: this.organization,
    portfolioUrl: this.portfolioUrl,
    mentees: this.mentees,
    mentors: this.mentors,
    background: this.background,
    availability: this.availability
  };
  return userdata;
};

const User = mongoose.model("users", userSchema);

module.exports = { User };
