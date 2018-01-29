import React from "react";
import Router from "next/router";
import Dashboard from "../components/dashboard";
import DefaultMessage from "../components/default-message";
import MatchInfo from "../components/match-info";
import UpdateProfileModal from "../components/update-profile-modal";
import Auth from "../services/auth";

const auth = new Auth();

export default class extends React.Component {
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
    auth.getProfile((_, profile) => {
      console.log(profile.sub);
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
          () =>
            this.state.user.role === "mentee"
              ? Router.replace("http://localhost:8080/mentee-dashboard")
              : null
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
    const menteeInfoCards = this.state.user.mentees.map((mentee, index) => (
      <MatchInfo
        mentorId={this.state.user.id}
        user={mentee}
        key={index}
        updateDashboard={() => this.getUserFromApi()}
      />
    ));

    return (
      <div className="mentor-dashboard-div">
        <Dashboard
          user={this.state.user}
          title="my mentee info"
          dashboard={true}
          loggedin={true}
          openUpdateModal={e => this.openModal(e)}
        >
          {this.state.user.mentees[0] ? (
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
      </div>
    );
  }
}
