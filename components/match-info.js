import React from "react";
import Button from "../components/button";
import ButtonLink from "../components/button-link";
import DefaultMessage from "../components/default-message";
import DeletePrompt from "../components/delete-prompt";
import Auth from "../services/auth";

const auth = new Auth();

export default class MatchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeMenteeOpen: false
    };
  }

  profilePhoto() {
    if (this.props.user.photoUrl) {
      return this.props.user.photoUrl;
    } else {
      return "/static/default-profile.png";
    }
  }

  pickMentee() {
    fetch(`api/users/${this.props.mentorId}/${this.props.user.id}`, {
      method: "PUT",
      body: JSON.stringify({ id: this.props.mentorId }),
      headers: new Headers({
        Authorization: `Bearer ${auth.getAccessToken()}`,
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        // console.log(this.this.props.user);
        this.props.updateDashboard();
        //  return res.json();
      })
      .catch(err => console.log(err));
  }

  removeMentee() {
    console.log(
      "mentor id: ",
      this.props.mentorId,
      "mentee id: ",
      this.props.user._id
    );
    fetch(`api/users/${this.props.mentorId}/${this.props.user._id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${auth.getAccessToken()}`,
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        this.props.updateDashboard();
        this.setState({ removeMenteeOpen: false });
      })
      .catch(err => console.log(err));
  }

  toggleRemoveMentee(event) {
    event.preventDefault();
    this.setState({ removeMenteeOpen: !this.state.removeMenteeOpen });
  }

  displayMenteeFields() {
    return (
      <div>
        <p>
          <b>Goals: </b>
          {this.props.user.goals}
        </p>
        <p>
          <b>Background: </b>
          {this.props.user.background}
        </p>
        <p>
          <b>Experience: </b>
          {this.props.user.experience}
        </p>
        <p>
          <b>Preferred Organizations: </b>
          {this.props.user.organization}
        </p>
        <p>
          <b>Skills: </b>
          {this.props.user.skills}
        </p>
        <p>
          <b>Portfolio: </b>
          {this.props.user.portfolioUrl}
        </p>
        <p>
          <b>Availability: </b>
          {this.props.user.availability}
        </p>
        {this.props.pickMentee ? (
          ""
        ) : (
          <p>
            <b>Contact: </b>
            {this.props.user.contact}
          </p>
        )}
      </div>
    );
  }

  displayMentorFields() {
    return (
      <div>
        <p>
          <b>Goals: </b>
          {this.props.user.goals}
        </p>
        <p>
          <b>Experience: </b>
          {this.props.user.experience}
        </p>
        <p>
          <b>Organization: </b>
          {this.props.user.organization}
        </p>
        <p>
          <b>Expertise: </b>
          {this.props.user.skills}
        </p>
        {this.props.user.portfolioUrl ? (
          <p>
            <b>Portfolio: </b>
            {this.props.user.portfolioUrl}
          </p>
        ) : (
          ""
        )}
        <p>
          <b>Contact: </b>
          {this.props.user.contact}
        </p>
      </div>
    );
  }

  render() {
    if (!this.props.user) {
      return <DefaultMessage role={this.props.user.role} />;
    } else {
      return (
        <div
          className={
            this.props.pickMentee
              ? "match-info-div no-shadow"
              : "match-info-div"
          }
        >
          <div className="profile">
            <div className="profile-photo-name-div">
              <div className="profile-photo-container">
                <img
                  className="profile-photo"
                  src={this.profilePhoto()}
                  alt="profile photo"
                />
              </div>
              <h2 className="username">
                {this.props.user.name.firstName +
                  " " +
                  this.props.user.name.lastName}
              </h2>
              <h3 className="role">{this.props.user.role}</h3>
              {this.props.user.role === "mentor" ? (
                <ButtonLink
                  size="small"
                  text="change mentor"
                  linkTo="/help"
                  color="coral"
                  backgroundColor="white"
                  border="none"
                />
              ) : null}
              {this.props.user.role === "mentee" && this.props.pickMentee ? (
                <Button
                  size="small"
                  text="add mentee"
                  onClick={() => this.pickMentee()}
                  color="white"
                  backgroundColor="turquoise"
                />
              ) : (
                ""
              )}
              {this.props.user.role === "mentee" && !this.props.pickMentee ? (
                <Button
                  size="small"
                  text="remove mentee"
                  onClick={e => this.toggleRemoveMentee(e)}
                  color="coral"
                  backgroundColor="white"
                  border="none"
                />
              ) : (
                ""
              )}
              {this.state.removeMenteeOpen ? (
                <DeletePrompt onClick={() => this.removeMentee()} />
              ) : (
                ""
              )}
            </div>
            <div className="profile-info-div">
              {this.props.user.role === "mentee" && this.displayMenteeFields()}
              {this.props.user.role === "mentor" && this.displayMentorFields()}
            </div>
          </div>
          <style jsx>{`
        .match-info-div{
          box-sizing: border-box;
          position: relative;
          background-color: white;
          padding: 70px 45px;
          color: #1e1e1e;
          display: inline-block;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 300px;
          text-align: center;
          margin: 0 auto 60px auto;
          overflow: scroll;
        }
        .profile-photo-container{
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          background-color: #84D6D2;
        }
        .profile-photo{
          height: 150px;
          margin: 0 auto;
        }
        .username{
          font-weight: 200;
          margin-bottom: 5px;
        }
        .role{
          font-weight: 100;
          margin: 0;
        }
        .profile-info-div{
          text-align: left;
        }
        @media only screen and (min-width: 600px) {
          .match-info-div{
            filter: drop-shadow(0 0 15px #9E9E9E);
          }
          .no-shadow{
            filter: drop-shadow(0 0 0px #9E9E9E);
          }
          @media only screen and (min-width: 900px) {
            .match-info-div{
              padding: 30px;
              width: 80%;
            }
            .profile-photo-container{
              float: left;
              margin: 0 20px 20px 20px;
            }
            .profile-info-div{
              text-align: left;
              margin: 0 auto;
            }
            .profile-photo-name-div{
              float: left;
              padding: 0 20px 20px 0;
              max-width: 200px;
            }
          }
          `}</style>
        </div>
      );
    }
  }
}
