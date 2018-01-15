import React from 'react';
import Button from '../components/button';

export default class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.user);
    if (this.props.user) {
      this.state = {
        firstName: this.props.user.name.firstName,
        lastName: this.props.user.name.lastName,
        email: this.props.user.contact,
        goals: this.props.user.goals,
        org: this.props.user.organization,
        experience: this.props.user.experience,
        skills: this.props.user.skills,
        lookingFor: this.props.user.lookingFor,
        photoUrl: this.props.user.photoUrl
      }
    }

  }

  render () {
    return (
      <div className="mentor-div">
        <div className="name-labels-div">
        <label htmlFor="firstName" className="name-label first-name">first</label>
        <label htmlFor="lastName" className="name-label">last name</label>
        </div>
        <input
            value={this.state.firstName}
            onChange={() => this.setState({firstName: event.target.value})}
            type="text" name="firstName"
            className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}>
        </input>
        <input
            value={this.state.lastName}
            onChange={() => this.setState({lastName: event.target.value})}
            type="text" name="lastName" className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}>
        </input>
        <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
        <input
            value={this.state.email}
            onChange={() => this.setState({email: event.target.value})}
            type="email"
            name="email"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
        <input
            value={this.state.goals}
            onChange={() => this.setState({goals: event.target.value})}
            type="text"
            name="goals"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="org" className="block">which organization do you currently work for?</label>
        <input
            value={this.state.org}
            onChange={() => this.setState({org: event.target.value})}
            type="text"
            name="org"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="experience" className="block">how many years of experience do you have?</label>
        <input
            value={this.state.experience}
            onChange={() => this.setState({experience: event.target.value})}
            type="text"
            name="experience"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="expertise" className="block">what areas of expertise could you share with a mentee?</label>
        <input
            value={this.state.skills}
            onChange={() => this.setState({skills: event.target.value})}
            type="text"
            name="expertise"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="looking-for" className="block">what are you looking for in a mentee?</label>
        <input
            value={this.state.lookingFor}
            onChange={() => this.setState({lookingFor: event.target.value})}
            type="text"
            name="looking-for"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="photoUrl" className="block">paste the url of the photo you want as your profile picture (you can add this later):</label>
            <input
                value={this.state.availability}
                onChange={() => this.setState({photoUrl: event.target.value})}
                type="text"
                name="photoUrl"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        {this.props.user ? null: <Button block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" onClick={(e) => e.preventDefault()}/>}
        <style jsx>{`
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
            text-align: center;
            font-weight: 200;
            color: coral;
          }
          .block{
            display: block;
            margin: 5px auto;
            width: 300px;
          }
          .block-input{
            margin: 5px auto 20px auto;
            height: 50px;
          }
          .block{
            display: block;
            margin: 5px auto;
            width: 300px;
          }
          .block-input{
            margin: 5px auto 20px auto;
            height: 50px;
          }
          .first-name:after{
            content: " & ";
          }
          .name-input{
            width: 300px;
          }
          .colored-input-border{
            border: 1px solid turquoise;
          }

          @media only screen and (min-width: 440px) {
            .block, .name-input{
              width: 330px;
            }
          }

          @media only screen and (min-width: 500px) {
            .block, .name-input{
              width: 400px;
            }
          }

          @media only screen and (min-width: 661px) {
            .block{
              width: 550px;
            }
            .block-input{
              height: 20px;
            }
            .name-label{
              margin: 0 110px;
            }
            .name-input{
              width: 262px;
            }
            .first-name:after{
              content: " name";
            }
          }
          `}</style>
        </div>
      );
    }
  }
