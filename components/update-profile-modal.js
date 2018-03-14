import MenteeForm from "../components/mentee-form";
import MentorForm from "../components/mentor-form";
import Button from "../components/button";

export default function UpdateProfileModal(props) {
  return (
    <div className="update-profile-div">
      <div className="modal">
        <button className="close-button" onClick={props.closeModal}>
          <img src="static/close-button.svg" />
        </button>
        <h1 className="title">my profile</h1>
        <form className="" onSubmit={props.saveChanges}>
          {props.role === "mentor" ? (
            <MentorForm
              user={props.user}
              closeModal={props.closeModal}
              coloredInputBorder="true"
              saveChanges={props.saveChanges}
              updateDashboard={props.updateDashboard}
              loggedin={props.loggedin}
            />
          ) : (
            <MenteeForm
              user={props.user}
              closeModal={props.closeModal}
              coloredInputBorder="true"
              saveChanges={props.saveChanges}
              updateDashboard={props.updateDashboard}
              loggedin={props.loggedin}
            />
          )}
        </form>
        <style jsx>{`
          .modal {
            box-sizing: border-box;
            display: block;
            background-color: white;
            max-width: 98%;
            max-height: 95%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: auto;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            -o-filter: drop-shadow(0 0 2000px #000000);
            -moz-filter: drop-shadow(0 0 2000px #000000);
            -webkit-box-shadow: rgba(0, 0, 0, 0.4) 5px 10px 500px 50px;
            font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            z-index: 1;
          }
          .title {
            font-weight: 200;
          }
          .close-button {
            border: none;
            position: absolute;
            top: 12px;
            right: 10px;
            background-color: white;
          }
          .close-button:hover {
            cursor: pointer;
            background-color: #bcfff8;
          }

          @media only screen and (min-width: 700px) {
            .modal {
              width: 650px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
