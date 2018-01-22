const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  photoUrl: { type: String, default: "/static/default-profile.png" },
  creationDate: { type: String, default: new Date() },
  role: { type: String, enum: ["mentor", "mentee"] },
  goals: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: String, required: true },
  organization: { type: String, required: true },
  contact: { type: String, required: true },
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

const User = mongoose.model("users", userSchema);

module.exports = { User };
