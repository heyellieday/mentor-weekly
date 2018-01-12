import React from 'react';
import Button from '../components/button';

export default class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.user) {
      this.state = {
        firstName: this.props.user.userName.firstName
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
        <input value={this.state.firstName} onChange={() => this.setState({firstName: event.target.value})} type="text" name="firstName" className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}></input>
        <input type="text" name="lastName" className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}></input>
        <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
        <input type="email" name="email" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
        <input type="text" name="goals" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <label htmlFor="org" className="block">which organization do you currently work for?</label>
        <input type="text" name="org" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <label htmlFor="experience" className="block">how many years of experience do you have?</label>
        <input type="text" name="experience" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <label htmlFor="expertise" className="block">what areas of expertise could you share with a mentee?</label>
        <input type="text" name="expertise" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <label htmlFor="looking-for" className="block">what are you looking for in a mentee?</label>
        <input type="text" name="looking-for" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
        <Button block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" onClick={(e) => e.preventDefault()}/>
        <style jsx>{`
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
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

          @media only screen and (min-width: 440px) {
            .block{
              width: 330px;
            }
          }

          @media only screen and (min-width: 500px) {
            .block{
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
          }
          `}</style>
        </div>
      );
    }
  }
