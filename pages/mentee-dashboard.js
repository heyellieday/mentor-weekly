import React from 'react';
import Dashboard from '../components/dashboard';
import DefaultMessage from '../components/default-message';
import MatchInfo from '../components/match-info';
import UpdateProfileModal from '../components/update-profile-modal';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        updateModalIsOpen: false,
        user:{
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
      }
  }

  componentDidMount() {
        this.getUserFromApi();
    }

  getUserFromApi() {
     fetch(`api/users/5a5e49754405f765b9ed27c9`)
      .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
      .then(user =>
                this.setState({
                    user:{
                      name: {
                        firstName: user.name.firstName,
                        lastName: user.name.lastName
                      },
                      photoUrl: user.photoUrl,
                      creationDate: user.creationDate,
                      role: user.role,
                      goals: user.goals,
                      experience: user.experience,
                      skills: user.skills,
                      organization: user.organization,
                      contact: user.contact,
                      portfolioUrl: user.portfolioUrl,
                      potentialMentees: user.potentialMentees,
                      mentees: user.mentees,
                      mentors: user.mentors,
                      lookingFor: user.lookingFor,
                      //mentee fields only
                      background: user.background,
                      availability: user.availability
                    }
                })
            )
      .catch(err =>
            this.setState({
                error: 'Could not load user',
            })
        );
    }

  openModal(event) {
    event.preventDefault();
    this.setState({updateModalIsOpen: true});
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({updateModalIsOpen: false});
  }

  render () {
    const mentorInfoCards = this.state.user.mentors.map((mentor, index) => (
            <MatchInfo user={mentor}  key={index} />
        ));
    return (
      <div className="dashboard-div">
        <Dashboard
            user={this.state.user}
            title="my mentor info"
            dashboard={true}
            loggedin={true}
            openUpdateModal={(e) => this.openModal(e)}
            >
        {this.state.user.mentors ? mentorInfoCards :<DefaultMessage />}
        </Dashboard>
        {this.state.updateModalIsOpen ? <UpdateProfileModal role="mentor" user={this.state.user} closeModal={(e) => this.closeModal(e)} /> : null}
        <style jsx>{`
          .dashboard-div{
            height: 100%;
          }
        `}</style>
        </div>
      )
    }
  }
  //  <Header text={name} />
