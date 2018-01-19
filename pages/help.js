import React from "react";
import Dashboard from "../components/dashboard";
import Helpform from "../components/help-form";
import UpdateProfileModal from "../components/update-profile-modal";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateModalIsOpen: false,
      users: [
        {
          userId: "alinal",
          name: {
            firstName: "Alina",
            lastName: "Lodahl"
          },
          photoUrl:
            "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/253094_10101142302648164_1065808377_n.jpg?oh=a3499a650864ce68161cd02ff675761b&oe=5AB28440",
          role: "mentee",
          mentorId: "ellied",
          goals:
            "Get an internship or entry-level front-end or full-stack engineering position",
          experience:
            "7 months of JS, HTML, CSS.  Almost done with the Thinkful Full-stack Bootcamp",
          skills: "JavaScript, NodeJS, React, CSS, HTML, JSX, GIT",
          portfolioUrl: "https://github.com/alodahl",
          background: "BA in Visual Art, Teacher for Art and Preschool",
          organization:
            "any size, ideally with an emphasis visual arts or positive impact",
          availability: "M-F 3-5pm",
          contact: "alina@email.com"
        },
        {
          userId: "ellied",
          name: {
            firstName: "Ellie",
            lastName: "Day"
          },
          photoUrl:
            "https://media.licdn.com/media/AAEAAQAAAAAAAApxAAAAJGVhMDUwOTk1LTliMzUtNDZlZS05YzFmLWFlNDkzYzY3OWFiMQ.jpg",
          role: "mentor",
          mentorId: "ellied",
          goals: "invest in future engineers",
          organization: "Mavenlink",
          experience: "6 years",
          skills: "career advice, JavaScript, NodeJS, GIT, SQL, NoSQL, React",
          lookingFor: "mentees interested in coding with JS",
          contact: "ellie@email.com"
        }
      ]
    };
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
          user={this.state.users[1]}
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
