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
        <label htmlFor="firstName" className="name-label first-name">first name</label>
        <input
            placeholder={this.props.user?"":"first name"}
            value={this.state.firstName}
            onChange={() => this.setState({firstName: event.target.value})}
            type="text" name="firstName"
            className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
        </input>
        <label htmlFor="lastName" className="name-label">last name</label>
        <input
            placeholder={this.props.user?"":"last name"}
            value={this.state.lastName}
            onChange={() => this.setState({lastName: event.target.value})}
            type="text" name="lastName"
            className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
        </input>
        <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
        <input
            placeholder={this.props.user?"":"ex: someone@yahoo.com"}
            value={this.state.email}
            onChange={() => this.setState({email: event.target.value})}
            type="email"
            name="email"
            className={this.props.coloredInputBorder? "colored-input-border  narrow-input":"narrow-input"}>
        </input>
        <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
        <input
            placeholder={this.props.user?"":"ex: meet aspiring front-end engineers"}
            value={this.state.goals}
            onChange={() => this.setState({goals: event.target.value})}
            type="text"
            name="goals"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="org" className="block">which organization do you currently work for? What is the main mission/product?</label>
        <input
            placeholder={this.props.user?"":"ex: freelance, yelp"}
            value={this.state.org}
            onChange={() => this.setState({org: event.target.value})}
            type="text"
            name="org"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="experience" className="block">how many years of experience do you have?</label>
        <input
            placeholder={this.props.user?"":"ex: 8 years as a QA engineer"}
            value={this.state.experience}
            onChange={() => this.setState({experience: event.target.value})}
            type="text"
            name="experience"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="expertise" className="block">what areas of expertise could you share with a mentee?</label>
        <input
            placeholder={this.props.user?"":"ex: career advice, JavaScript, NodeJS, GIT, SQL, NoSQL, React"}
            value={this.state.skills}
            onChange={() => this.setState({skills: event.target.value})}
            type="text"
            name="expertise"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
        </input>
        <label htmlFor="looking-for" className="block">what are you looking for in a mentee?</label>
        <input
            placeholder={this.props.user?"":"ex: interest in QA testing"}
            value={this.state.lookingFor}
            onChange={() => this.setState({lookingFor: event.target.value})}
            type="text"
            name="looking-for"
            className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="photoUrl" className="block">paste the url of the photo you want as your profile picture here (you can add this later):</label>
            <input
                placeholder={this.props.user?"":"ex: https://instagram.fsnc1-1.fna.fbcdn.net/n680_n.jpg"}
                value={this.state.photoUrl}
                onChange={() => this.setState({photoUrl: event.target.value})}
                type="text"
                name="photoUrl"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        {this.props.user ? <Button color="turquoise" text="save changes" /> : <Button block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" onClick={(e) => e.preventDefault()}/>}
        {this.props.user ? <Button color="#1e1e1e" text="cancel" onClick={this.props.closeModal} block="true"/> : ""}
        <style jsx>{`
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
            text-align: center;
            font-weight: 200;
            font-size: 16px;
            color: coral;
          }
          input::placeholder{
            font-style: italic;
            color: gray;
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
          .narrow-input{
            width: 300px;
          }
          .colored-input-border{
            border: 1px solid turquoise;
          }

          @media only screen and (min-width: 440px) {
            .block, .narrow-input{
              width: 330px;
            }
          }

          @media only screen and (min-width: 500px) {
            .block, .narrow-input{
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
            .narrow-input{
              width: 550px;
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
