import Button from "../components/button";
import MenteeForm from "../components/mentee-form";
import MentorForm from "../components/mentor-form";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMentorForm: true
    };
  }

  form(value) {
    this.setState({ isMentorForm: value });
  }

  render() {
    return (
      <div id="signup" className="signup">
        <h2>get involved</h2>
        <form className="signup-form">
          <div className="radio-div">
            <legend>Which role are you interested in?</legend>
            <input
              type="radio"
              id="signup"
              name="signup"
              className="radio-button"
              onClick={() => this.form(true)}
              value="mentor"
            />
            <label htmlFor="signup">be a mentor</label>
            <input
              type="radio"
              id="signup"
              name="signup"
              className="radio-button"
              onClick={() => this.form(false)}
              value="mentee"
            />
            <label htmlFor="signup">be a mentee</label>
          </div>
          {this.state.isMentorForm ? <MentorForm /> : <MenteeForm />}
        </form>
        <style jsx>{`
          h2 {
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
          legend {
            margin-bottom: 5px;
          }
          input {
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
          }
          .radio-button {
            position: relative;
            bottom: 2px;
          }
          .radio-div {
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    );
  }
}
