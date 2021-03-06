import Button from "../components/button";
import MenteeForm from "../components/mentee-form";
import MentorForm from "../components/mentor-form";
import Auth from "../services/auth";

const auth = new Auth();

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMentorForm: true,
      user: {
        name: {
          firstName: "",
          lastName: ""
        },
        role: "mentor",
        contact: "",
        goals: "",
        organization: "",
        experience: "",
        skills: "",
        portfolioUrl: "",
        photoUrl: "",
        lookingFor: "",
        availability: "",
        background: ""
      }
    }
  }

  form(value) {
    this.setState({ isMentorForm: value });
    if (value === true) {
      this.setState(Object.assign({}, this.state, { user: {...this.state.user, role: "mentor" }}));
    } else {
      this.setState(Object.assign({}, this.state, { user: {...this.state.user, role: "mentee" }}));
    }
  }

  async saveChanges(event) {
    event.preventDefault();
    await localStorage.setItem(
      "new_user_form",
      JSON.stringify(this.state.user)
    );
    await localStorage.setItem("role", this.state.user.role)
    auth.login();
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
            <label htmlFor="signup">being a mentor</label>
            <input
              type="radio"
              id="signup"
              name="signup"
              className="radio-button"
              onClick={() => this.form(false)}
              value="mentee"
            />
            <label htmlFor="signup">being a mentee</label>
          </div>
          <Button
            block="true"
            color="white"
            type="submit"
            backgroundColor="turquoise"
            text="join mentor weekly"
            onClick={e => this.saveChanges(e)}
          />
        </form>
        <style jsx>{`
          h2 {
            font-weight: 100;
            font-size: 2.2em;
            border-bottom: 1px solid white;
            width: 200px;
            margin: 30px auto;
            padding: 0;
          }
          .signup {
            position: relative;
            background-color: Turquoise;
            padding: 5px;
            box-sizing: border-box;
            color: white;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
          }
          legend {
            margin: 5px auto;
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

          @media only screen and (min-width: 400px) {
            .signup {
              padding: 45px;
            }
          }
        `}</style>
      </div>
    );
  }
}
