import React from 'react';
import Dashboard from '../components/dashboard';
import DefaultMessage from '../components/default-message';
import MatchInfo from '../components/match-info';
import UpdateProfileModal from '../components/update-profile-modal';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage: "dashboard",
        updateModalIsOpen: false,
        mentor:{
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
     fetch(`api/users/5a5ce9cf734d1d3471841675`)
      .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
      .then(user =>
                this.setState({
                    mentor:{
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
    const matchInfoCards = this.state.mentor.mentees.map((mentee, index) => (
            <MatchInfo user={mentee}  pickMentee={true} key={index} />
        ));

    return (
      <div className="mentor-dashboard-div">
        <Dashboard
            user={this.state.mentor}
            title="my mentee info"
            dashboard={true}
            loggedin="true"
            openUpdateModal={(e) => this.openModal(e)}>
        {this.state.mentor.mentees ? matchInfoCards :<DefaultMessage />}
        </Dashboard>
        {this.state.updateModalIsOpen ? <UpdateProfileModal role="mentor" user={this.state.mentor} closeModal={(e) => this.closeModal(e)} /> : null}
        <style jsx>{`
          .mentor-dashboard-div{
            height: 100vh;
          }
          .default-message{
            background-color: white;
            padding: 70px 45px;
            color: #1e1e1e;
            display: inline-block;
            font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            width: 70%;
            filter: drop-shadow(0 0 15px #9E9E9E);
          }
          .default-header{
            font-weight: 100px;
            color: #00C1B8;
          }
          @media only screen and (min-width: 600px) {
            .default-message{
              width: 70%;
            }
          }
        `}</style>
        </div>
      )
    }
  }
  //  <Header text={name} />
