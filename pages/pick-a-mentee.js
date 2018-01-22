import React from "react";
import Dashboard from "../components/dashboard";
import DefaultMessage from "../components/default-message";
import MatchInfo from "../components/match-info";
import UpdateProfileModal from "../components/update-profile-modal";

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
        potentialMentees: [],
        mentees: [],
        mentors: [],
        lookingFor: "",
        //mentee fields only
        background: "",
        availability: ""
      },
      error: "",
      updateModalIsOpen: false
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

  openModal(event) {
    event.preventDefault();
    this.setState({ updateModalIsOpen: true });
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({ updateModalIsOpen: false });
  }

  render() {
    const menteeInfoCards = this.state.user.potentialMentees.map(
      (mentee, index) => (
        <MatchInfo
          user={mentee}
          mentorId={this.state.user.id}
          pickMentee={true}
          key={index}
          updateDashboard={() => this.getUserFromApi()}
        />
      )
    );

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
          {this.state.user.potentialMentees[0] ? (
            menteeInfoCards
          ) : (
            <DefaultMessage role="mentor" />
          )}
        </Dashboard>
        {this.state.updateModalIsOpen ? (
          <UpdateProfileModal
            role="mentor"
            user={this.state.user}
            closeModal={e => this.closeModal(e)}
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
//  <Header text={name} />
