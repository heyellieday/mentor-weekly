import Button from '../components/button';
import MenteeForm from '../components/mentee-form';
import MentorForm from '../components/mentor-form';

export default function Signup(props) {
  return (
    <div className="signup">
      <h2>get involved</h2>
      <form className="signup-form">
        <div className="radio-div">
          <legend>Which role are you interested in?</legend>
          <input type="radio" name="signup" className="radio-button"/>
          <label htmlFor="signup">be a mentor</label>
          <input type="radio" name="signup" className="radio-button"/>
          <label htmlFor="signup">be a mentee</label>
        </div>
        <div className="name-labels-div">
          <label htmlFor="firstName" className="name-label first-name">first</label>
          <label htmlFor="lastName" className="name-label">last name</label>
        </div>
        <input type="text" name="firstName" className="name-input"></input>
        <input type="text" name="lastName" className="name-input"></input>
        <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
        <input type="email" name="email" className="block block-input"></input>
        <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
        <input type="text" name="goals" className="block block-input"></input>
        <MentorForm />
        <Button block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" />
      </form>
      <style jsx>{`
          h2{
            font-weight: 100;
            font-size: 2.2em;
            border-bottom: 1px solid white;
            width: 200px;
            margin: 30px auto;
            padding: 5px;
          }
          .signup {
            position: relative;
            background-color: Turquoise;
            padding: 45px;
            box-sizing: border-box;
            color: white;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
          }
          legend{
            margin-bottom: 5px;
          }
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
          }
          .radio-button{
            position: relative;
            bottom: 2px;
          }
          .radio-div{
            margin-bottom: 5px;
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
