import React from "react";
import Dashboard from "../components/dashboard";
import Helpform from "../components/help-form";
import UpdateProfileModal from "../components/update-profile-modal";
import Auth from "../services/auth";
import Router from "next/router";

const auth = new Auth();
const { API_URL } = require("../config");

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
    if (!auth.isAuthenticated() && !process.browser) {
      console.log("test bypassing Next Router");
    } else if (!auth.isAuthenticated()) {
      Router.push("/", "/", { shallow: true });
    }
    this.getUserFromApi();
  }

  getUserFromApi() {
    auth.getProfile((_, profile) => {
      fetch("/api/users/" + profile.sub, {
        method: "get",
        headers: {
          Authorization: `Bearer ${auth.getAccessToken()}`
        }
      })
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
    });
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
          <Helpform role={this.state.user.role} />
        </Dashboard>
        {this.state.updateModalIsOpen ? (
          <UpdateProfileModal
            user={this.state.user}
            role={this.state.user.role}
            loggedin={true}
            closeModal={e => this.closeModal(e)}
            updateDashboard={() => this.getUserFromApi()}
          />
        ) : null}
      </div>
    );
  }
}
