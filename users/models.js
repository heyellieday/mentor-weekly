const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  }
  photoUrl: {type: String, default: ""},
  creationDate: {type: String, default: new date()}
  role: {type: String,  enum: ['mentor', 'mentee']},
  goals: {type: String, required: true},
  experience: {type: String, required: true},
  skills: {type: String, required: true},
  organization: {type: String, required: true},
  contact: {type: String, required: true},
  portfolioUrl: {type: String},
  //mentor fields only
  lookingFor: {type: String},
  //mentee fields only
  background: {type: String},
  availability: {type: String}
});

userSchema.methods.apiRepr = function() {
  let userdata ={
    id: this._id,
    name: this.name,
    photoUrl: this.photoUrl,
    creationDate: this.creationDate,
    role: this.name,
    goals: this.name,
    experience: this.name,
    skills: this.name,
    organization: this.name,
    contact: this.name,
    portfolioUrl: this.name,
  }
  if (this.role === "mentor") {
    userdata.lookingFor = this.lookingFor;
  } else {
    userdata.background = this.background;
    userdata.availability = this.availability;
  }
  return userdata;
}

const User = mongoose.model('users', userSchema);

module.exports = {User};
