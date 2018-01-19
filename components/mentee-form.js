import React from 'react';
import Button from '../components/button';

export default class MenteeForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
    console.log(this.props.user);
    if (this.props.user) {
      this.state = {
        firstName: this.props.user.name.firstName,
        lastName: this.props.user.name.lastName,
        email: this.props.user.contact,
        goals: this.props.user.goals,
        portfolio: this.props.user.portfolioUrl,
        background: this.props.user.background,
        experience: this.props.user.experience,
        skills: this.props.user.skills,
        org: this.props.user.organization,
        availability: this.props.user.availability,
        photoUrl: this.props.user.photoUrl
      }
    }
  }

  render () {
      return (
        <div className="mentee-div">
          <form>
            <label htmlFor="firstName" className="name-label first-name">first name</label>
            <input
                placeholder={this.props.user?"":"first name"}
                value={this.state.firstName}
                onChange={() => this.setState({firstName: event.target.value})}
                type="text" id="firstName"
                className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
            </input>
            <label htmlFor="lastName" className="name-label">last name</label>
            <input
                placeholder={this.props.user?"":"last name"}
                value={this.state.lastName}
                onChange={() => this.setState({lastName: event.target.value})}
                type="text" id="lastName" className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
            </input>
            <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
            <input
                placeholder={this.props.user?"":"ex: someone@yahoo.com"}
                value={this.state.email}
                onChange={() => this.setState({email: event.target.value})}
                type="email"
                id="email"
                className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
            </input>
            <label htmlFor="portfolio" className="block">please enter the url for your portfolio or website:</label>
            <input
                placeholder={this.props.user?"":"ex: github.com/myrepo"}
                value={this.state.portfolio}
                onChange={() => this.setState({portfolio: event.target.value})}
                type="text"
                id="portfolio"
                className={this.props.coloredInputBorder? "colored-input-border narrow-input":"narrow-input"}>
            </input>
            <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
            <textarea
                placeholder={this.props.user?"":"ex: I'd like career advice about a career in data-science"}
                value={this.state.goals}
                onChange={() => this.setState({goals: event.target.value})}
                type="text"
                id="goals"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
            <label htmlFor="background" className="block">please briefly describe your background/training:</label>
            <textarea
                placeholder={this.props.user?"":"ex: I have a Bachelors in Business, and I've taken 1 web design course"}
                value={this.state.background}
                onChange={() => this.setState({background: event.target.value})}
                type="text"
                id="background"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
            <label htmlFor="experience" className="block">what is your focus and experience level?</label>
            <textarea
                placeholder={this.props.user?"":"ex: front-end design, 2 months of html & css"}
                value={this.state.experience}
                onChange={() => this.setState({experience: event.target.value})}
                type="text"
                id="experience"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
            <label htmlFor="skills" className="block">which coding languages and tools are you familiar with?</label>
            <textarea
                placeholder={this.props.user?"":"ex: PHP and GitHub"}
                value={this.state.skills}
                onChange={() => this.setState({skills: event.target.value})}
                type="text"
                id="skills"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
            <label htmlFor="org" className="block">what sort of organizations and positions would you like to learn more about?</label>
            <textarea
                placeholder={this.props.user?"":"ex: freelancing, small companies"}
                value={this.state.org}
                onChange={() => this.setState({org: event.target.value})}
                type="text"
                id="org"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
            <label htmlFor="availability" className="block">what times are you available to meet with a mentor for 30 minutes?</label>
            <textarea
                placeholder={this.props.user?"":"ex: Mon and Wed 5-6pm PST"}
                value={this.state.availability}
                onChange={() => this.setState({availability: event.target.value})}
                type="text"
                id="availability"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
                <label htmlFor="photoUrl" className="block">paste the url of the photo you want as your profile picture (you can add this later):</label>
            <textarea
                placeholder={this.props.user?"":"ex: https://instagram.fsnc1-1.fna.fbcdn.net/n680_n.jpg"}
                value={this.state.availability}
                onChange={() => this.setState({photoUrl: event.target.value})}
                type="text"
                id="photoUrl"
                className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}>
            </textarea>
                {this.props.user ? <Button color="turquoise" text="save changes" /> : <Button type="submit" block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" onClick={(e) => e.preventDefault()}/>}
                {this.props.user ? <Button color="#1e1e1e" text="cancel" onClick={this.props.closeModal} block="true"/> : ""}
          </form>
          <style jsx>{`
              label{
                  display: block;
                  clear: both;
                }
              input{
                margin: 5px auto 20px auto;
                border: 1px solid white;
                border-radius: 3px;
                text-align: center;
                font-weight: 200;
                color: coral;
                font-size: 16px;
              }
              textarea{
                margin: 5px auto 20px auto;
                border: 1px solid white;
                border-radius: 3px;
                text-align: center;
                font-weight: 200;
                font-size: 16px;
                color: coral;
                padding: 1px;
                height: 16px;
              }
              input::placeholder, textarea::placeholder{
                font-style: italic;
                color: gray;
              }
              .block{
                display: block;
                margin: 5px auto;
                width: 300px;
              }
              .block-input{
                height: 50px;
                margin: 5px auto 20px auto;
              }
              .colored-input-border{
                border: 1px solid turquoise;
              }
              .narrow-input{
                width: 300px;
              }

              @media only screen and (min-width: 440px) {
                .block, .narrow-input{
                  width: 330px;
                }
              }

              @media only screen and (min-width: 661px) {
                .block, .narrow-input{
                  width: 550px;
                }
                .block-input{
                  height: 18px;
                }
              }
            `}</style>
        </div>
    );
  }
}
