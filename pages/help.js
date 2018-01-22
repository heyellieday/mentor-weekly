import React from "react";
import Dashboard from "../components/dashboard";
import Helpform from "../components/help-form";
import UpdateProfileModal from "../components/update-profile-modal";

//const sgMail = require("@sendgrid/mail");
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "animblestudio@gmail.com",
  from: "help@mentorweekly.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateModalIsOpen: false,
      user: {
        id: "",
        name: {
          firstName: "",
          lastName: ""
        },
        photoUrl: "",
        creationDate: "",
        role: "",
        goals: "",
        experience: "",
        skills: "",
        organization: "",
        contact: "",
        portfolioUrl: "",
        potentialMentees: "",
        mentees: [],
        mentors: [],
        lookingFor: "",
        //mentee fields only
        background: "",
        availability: ""
      },
      error: ""
    };
  }

  componentDidMount() {
    this.getUserFromApi();
  }

  getUserFromApi() {
    fetch(`api/users/5a5ce9cf734d1d3471841675`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(user =>
        this.setState({
          user: user,
          error: ""
        })
      )
      .catch(err =>
        this.setState({
          error: "Could not load user"
        })
      );
  }

  sendHelpMessage() {
    //  event.preventDefault();
    sgMail.send(msg);
  }

  openModal(event) {
    event.preventDefault();
    this.setState({ updateModalIsOpen: true });
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({ updateModalIsOpen: false });
  }

  render() {
    return (
      <div className="help-page">
        <Dashboard
          user={this.state.user}
          title="get some help"
          dashboard={true}
          loggedin="true"
          openUpdateModal={e => this.openModal(e)}
        >
          <Helpform />
        </Dashboard>
        {this.state.updateModalIsOpen ? (
          <UpdateProfileModal
            role="mentee"
            closeModal={e => this.closeModal(e)}
          />
        ) : null}
        <style jsx>{``}</style>
      </div>
    );
  }
}
