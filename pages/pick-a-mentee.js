import React from "react";
import Router from "next/router";
import Dashboard from "../components/dashboard";
import DefaultMessage from "../components/default-message";
import MatchInfo from "../components/match-info";
import UpdateProfileModal from "../components/update-profile-modal";
import Auth from "../services/auth";

const auth = new Auth();
const { API_URL } = require("../config");

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        mentees: [],
        mentors: [],
        lookingFor: "",
        //mentee fields only
        background: "",
        availability: ""
      },
      error: "",
      updateModalIsOpen: false,
      potentialMentees: []
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
        .then(
          this.state.user.role === "mentee"
            ? Router.push("/mentee-dashboard", "/mentee-dashboard", {
                shallow: true
              })
            : this.getMentees()
        )
        .catch(err =>
          this.setState({
            error: "Could not load user"
          })
        );
    });
  }

  getMentees() {
    fetch(`api/users/pick-a-mentee`, {
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
      .then(mentees =>
        this.setState({
          potentialMentees: mentees,
          error: ""
        })
      )
      .catch(err =>
        this.setState({
          error: "Could not load mentees"
        })
      );
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
    const menteeInfoCards = this.state.potentialMentees.map((mentee, index) => (
      <MatchInfo
        user={mentee}
        mentorId={this.state.user.id}
        pickMentee={true}
        key={index}
        updateDashboard={() => this.getMentees()}
      />
    ));

    return (
      <div className="mentor-dashboard-div">
        <Dashboard
          user={this.state.user}
          title="pick a mentee"
          pickMentee={true}
          dashboard={true}
          loggedin={true}
          openUpdateModal={e => this.openModal(e)}
        >
          {this.state.potentialMentees.length ? (
            menteeInfoCards
          ) : (
            <DefaultMessage role="mentor" />
          )}
        </Dashboard>
        {this.state.updateModalIsOpen ? (
          <UpdateProfileModal
            role="mentor"
            user={this.state.user}
            loggedin={true}
            closeModal={e => this.closeModal(e)}
            updateDashboard={() => this.getUserFromApi()}
          />
        ) : null}
        <style jsx>{`
          .mentor-dashboard-div {
            height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}
