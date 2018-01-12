import React from 'react';
import Button from '../components/button';

export default class MenteeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
      return (
        <div className="mentee-div">
            <div className="name-labels-div">
              <label htmlFor="firstName" className="name-label first-name">first</label>
              <label htmlFor="lastName" className="name-label">last name</label>
            </div>
            <input type="text" name="firstName" className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}></input>
            <input type="text" name="lastName" className={this.props.coloredInputBorder? "colored-input-border name-input":"name-input"}></input>
            <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
            <input type="email" name="email" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
            <input type="text" name="goals" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="portfolio" className="block">please enter the url for your portfolio or website:</label>
            <input type="text" name="portfolio" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="background" className="block">please briefly describe your background/training:</label>
            <input type="text" name="background" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="languages" className="block">which coding languages and tools are you familiar with?</label>
            <input type="text" name="languages" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="experience" className="block">what is your focus and experience level?</label>
            <input type="text" name="experience" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="org" className="block">what sort of organizations and positions would you like to learn more about?</label>
            <input type="text" name="org" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
            <label htmlFor="schedule" className="block">what times are you available to meet with a mentor for 30 minutes?</label>
            <input type="text" name="schedule" className={this.props.coloredInputBorder? "colored-input-border block block-input":"block block-input"}></input>
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

              @media only screen and (min-width: 661px) {
                .block{
                  width: 550px;
                }
                .block-input{
                  height: 20px;
                }
            `}</style>
        </div>
    );
  }
}
