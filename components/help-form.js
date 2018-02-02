import Button from "../components/button";
import Auth from "../services/auth";

const auth = new Auth();

export default class Helpform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFieldsFilled: false
    };
  }
  sendHelpMessage(event) {
    event.preventDefault();
    let data = {
      firstName: this.firstNameInput.value,
      lastName: this.lastNameInput.value,
      email: this.emailInput.value,
      subject: this.subjectInput.value,
      issue: this.issueInput.value
    };
    let validated =
      this.firstNameInput.value &&
      this.lastNameInput.value &&
      this.emailInput.value &&
      this.subjectInput.value &&
      this.issueInput.value;
    console.log(validated);
    if (validated) {
      console.log(data);
      this.sendEmailRequest(data);
    } else {
      alert("Be sure to fill out every field so we can send your message.");
    }
  }

  sendEmailRequest(user) {
    console.log(this.state.user);
    fetch(`api/help`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        Authorization: `Bearer ${auth.getAccessToken()}`,
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(() => alert("email sent"))
      .then(() => (window.location = `/${this.props.role}-dashboard`))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="helpform">
        <form>
          <p className="message">
            Use this form to get in contact with someone at Mentor Weekly. We
            are happy to help!
          </p>
          <label htmlFor="firstName" className="name-label first-name">
            first name
          </label>
          <input
            ref={input => (this.firstNameInput = input)}
            type="text"
            id="firstName"
            className="block block-input"
          />
          <label htmlFor="lastName" className="name-label">
            last name
          </label>
          <input
            ref={input => (this.lastNameInput = input)}
            type="text"
            id="lastName"
            className="block block-input"
          />
          <label htmlFor="email" className="block">
            email address
          </label>
          <input
            ref={input => (this.emailInput = input)}
            type="email"
            id="email"
            className="block block-input"
          />
          <label htmlFor="subject" className="block">
            message subject
          </label>
          <input
            ref={input => (this.subjectInput = input)}
            type="text"
            id="subject"
            className="block block-input"
          />
          <label htmlFor="issue" className="block">
            please describe your issue here:
          </label>
          <textarea
            ref={input => (this.issueInput = input)}
            type="text"
            id="issue"
            className="block block-input issue"
          />
          <div className="extra" />
          <Button
            type="submit"
            text="send message"
            color="turquoise"
            backgroundColor="#F4F4F4"
            onClick={e => this.sendHelpMessage(e)}
          />
        </form>
        <style jsx>{`
          .helpform {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            color: #1e1e1e;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
            margin: 0 auto;
            width: 300px;
            height: 100vh;
          }
          input,
          textarea {
            margin: 5px 0 20px 0;
            border: 1px solid turquoise;
            border-radius: 3px;
            font: 16px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            text-align: center;
          }
          .block,
          .message {
            display: block;
            margin: 0 auto;
            width: 300px;
          }
          .message {
            margin: 0 auto 50px auto;
          }
          .block-input {
            display: block;
            margin: 5px auto 20px auto;
          }
          .issue {
            height: 200px;
            text-align: left;
          }

          @media only screen and (min-width: 961px) {
            .helpform {
              width: 600px;
            }
            .block,
            .message {
              width: 550px;
            }
            .block-input,
            .name-label {
              height: 20px;
              width: 550px;
            }
            .issue {
              height: 140px;
            }
            .name-label {
              clear: both;
            }
            .extra {
              height: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
}
