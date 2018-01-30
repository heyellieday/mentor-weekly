import React from "react";
import Button from "../components/button";
import Auth from "../services/auth";

const auth = new Auth();

export default class MenteeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.user) {
      this.state = {
        user: {
          id: this.props.user.id,
          name: {
            firstName: this.props.user.name.firstName,
            lastName: this.props.user.name.lastName
          },
          contact: this.props.user.contact,
          goals: this.props.user.goals,
          organization: this.props.user.organization,
          experience: this.props.user.experience,
          skills: this.props.user.skills,
          portfolioUrl: this.props.user.portfolioUrl,
          photoUrl: this.props.user.photoUrl,
          lookingFor: this.props.user.lookingFor,
          availability: this.props.user.availability,
          background: this.props.user.background
        }
      };
    } else {
      this.state = {
        user: {
          name: {
            firstName: "",
            lastName: ""
          },
          role: "mentee",
          contact: "",
          goals: "",
          organization: "",
          experience: "",
          skills: "",
          portfolioUrl: "",
          photoUrl: "",
          lookingFor: "",
          availability: "",
          background: ""
        }
      };
    }
  }

  updateUserData(newData) {
    fetch(`api/users/${newData.id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: new Headers({
        Authorization: `Bearer ${auth.getAccessToken()}`,
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(() => this.props.updateDashboard())
      .catch(err =>
        this.setState({
          error: "Could not load user"
        })
      );
  }

  saveChanges(event) {
    event.preventDefault();
    if (this.props.user) {
      this.updateUserData(this.state.user);
    } else {
      localStorage.setItem("new_user_form", JSON.stringify(this.state.user));
      auth.login();
    }
    this.props.loggedin ? this.props.closeModal(event) : null;
  }

  handleChange(e, key) {
    let changes = {};
    changes[key] = e.target.value;
    this.setState({
      user: Object.assign({}, this.state.user, changes)
    });
  }

  handleNameChange(e, key) {
    let changes = { name: this.state.user.name };
    changes.name[key] = e.target.value;
    this.setState({
      user: Object.assign({}, this.state.user, changes)
    });
  }

  render() {
    return (
      <div className="mentee-div">
        <label htmlFor="firstName" className="name-label first-name">
          first name
        </label>
        <input
          placeholder={this.props.user ? "" : "first name"}
          value={this.state.user.name.firstName}
          onChange={e => this.handleNameChange(e, "firstName")}
          type="text"
          id="firstName"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border narrow-input"
              : "narrow-input"
          }
        />
        <label htmlFor="lastName" className="name-label">
          last name
        </label>
        <input
          placeholder={this.props.user ? "" : "last name"}
          value={this.state.user.name.lastName}
          onChange={e => this.handleNameChange(e, "lastName")}
          type="text"
          id="lastName"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border narrow-input"
              : "narrow-input"
          }
        />
        <label htmlFor="contact" className="block">
          what email address can we use to contact you about a mentorship?
          {this.props.user
            ? ""
            : "(when you create a password, we will send a verification code to this address)"}
        </label>
        <input
          placeholder={this.props.user ? "" : "ex: someone@yahoo.com"}
          value={this.state.user.contact}
          onChange={e => this.handleChange(e, "contact")}
          type="contact"
          id="contact"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border  narrow-input"
              : "narrow-input"
          }
        />
        <label htmlFor="portfolioUrl" className="block">
          please enter the url of your portfolio or website:
        </label>
        <input
          placeholder={this.props.user ? "" : "ex: github.com/myrepo"}
          value={this.state.user.portfolioUrl}
          onChange={e => this.handleChange(e, "portfolioUrl")}
          type="text"
          id="portfolioUrl"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border narrow-input"
              : "narrow-input"
          }
        />
        <label htmlFor="goals" className="block">
          please describe your goals and what you&#39;d like to gain from a
          mentorship:
        </label>
        <textarea
          placeholder={
            this.props.user
              ? ""
              : "ex: I'd like career advice about a career in data-science"
          }
          value={this.state.user.goals}
          onChange={e => this.handleChange(e, "goals")}
          type="text"
          id="goals"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="background" className="block">
          please briefly describe your background/training:
        </label>
        <textarea
          placeholder={
            this.props.user
              ? ""
              : "ex: I have a Bachelors in Business, and I've taken 1 web design course"
          }
          value={this.state.user.background}
          onChange={e => this.handleChange(e, "background")}
          type="text"
          id="background"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="experience" className="block">
          what is your focus and experience level?
        </label>
        <textarea
          placeholder={
            this.props.user
              ? ""
              : "ex: front-end design, 2 months of html & css"
          }
          value={this.state.user.experience}
          onChange={e => this.handleChange(e, "experience")}
          type="text"
          id="experience"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="skills" className="block">
          which coding languages and tools are you familiar with?
        </label>
        <textarea
          placeholder={this.props.user ? "" : "ex: PHP and GitHub"}
          value={this.state.user.skills}
          onChange={e => this.handleChange(e, "skills")}
          type="text"
          id="skills"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="organization" className="block">
          what sort of organizations and positions would you like to learn more
          about?
        </label>
        <textarea
          placeholder={
            this.props.user ? "" : "ex: freelancing, small companies"
          }
          value={this.state.user.organization}
          onChange={e => this.handleChange(e, "organization")}
          type="text"
          id="organization"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="availability" className="block">
          what times are you available to meet with a mentor for 30 minutes?
        </label>
        <textarea
          placeholder={this.props.user ? "" : "ex: Mon and Wed 5-6pm PST"}
          value={this.state.user.availability}
          onChange={e => this.handleChange(e, "availability")}
          type="text"
          id="availability"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        <label htmlFor="photoUrl" className="block">
          paste the url of the photo you want as your profile picture here (you
          can add this later):
        </label>
        <textarea
          placeholder={
            this.props.user
              ? ""
              : "ex: https://instagram.fsnc1-1.fna.fbcdn.net/n680_n.jpg"
          }
          value={this.state.user.photoUrl}
          onChange={e => this.handleChange(e, "photoUrl")}
          type="text"
          id="photoUrl"
          className={
            this.props.coloredInputBorder
              ? "colored-input-border block block-input"
              : "block block-input"
          }
        />
        {this.props.user ? (
          <Button
            color="turquoise"
            text="save changes"
            type="submit"
            onClick={e => this.saveChanges(e)}
            backgroundColor="white"
          />
        ) : (
          <Button
            block="true"
            color="white"
            type="submit"
            backgroundColor="turquoise"
            text="join mentor weekly"
            onClick={e => this.saveChanges(e)}
          />
        )}
        {this.props.user ? (
          <Button
            color="#1e1e1e"
            size="cancel"
            text="cancel"
            onClick={this.props.closeModal}
            block="block"
            backgroundColor="white"
          />
        ) : (
          ""
        )}
        <style jsx>{`
          label {
            display: block;
            clear: both;
          }
          input {
            margin: 5px auto 20px auto;
            border: 1px solid white;
            border-radius: 3px;
            text-align: center;
            font-weight: 200;
            color: coral;
            font-size: 16px;
          }
          textarea {
            margin: 5px auto 20px auto;
            border: 1px solid white;
            border-radius: 3px;
            text-align: center;
            font-weight: 200;
            font-size: 16px;
            color: coral;
            padding: 1px;
            height: 16px;
          }
          input::placeholder,
          textarea::placeholder {
            font-style: italic;
            color: gray;
          }
          .block {
            display: block;
            margin: 5px auto;
            width: 300px;
          }
          .block-input {
            height: 50px;
            margin: 5px auto 20px auto;
          }
          .colored-input-border {
            border: 1px solid turquoise;
          }
          .narrow-input {
            width: 300px;
          }

          @media only screen and (min-width: 440px) {
            .block,
            .narrow-input {
              width: 330px;
            }
          }

          @media only screen and (min-width: 661px) {
            .block,
            .narrow-input {
              width: 550px;
            }
            .block-input {
              height: 18px;
            }
          }
        `}</style>
      </div>
    );
  }
}
