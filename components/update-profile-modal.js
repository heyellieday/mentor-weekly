import MenteeForm from '../components/mentee-form';
import MentorForm from '../components/mentor-form';
import Button from '../components/button';

export default function UpdateProfileModal(props) {

  return (
    <div className="update-profile-div">
      <div className="dark">
      </div>
      <div className="modal">
        <button className="close-button" aria-label="Close">
          <img src='/static/close-button.svg' />
        </button>
        <h1 className="title">my profile</h1>
        <form className="">
        {(props.role === "mentor") ? <MentorForm coloredInputBorder="true"/> : <MenteeForm coloredInputBorder="true"/>}
        <Button color="turquoise" backgroundColor="white" text="update my profile"/>
        <Button color="#1e1e1e" backgroundColor="white" text="cancel"/>
        </form>
        <style jsx>{`
          .modal {
            font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            box-sizing: border-box;
            display: block;
            background-color: white;
            opacity: ;
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
            filter: drop-shadow(0 0 2000px #000000);
          }
          .dark {
            width: 100%;
            height: 100%;
            top:0;
            left:0;
            opacity: 0.3;
            position: fixed;
          }
          .title{
            font-size: 2.2em;
            font-weight: 200;
          }
          input {
            background-color: red;
          }
          .close-button{
            border: none;
            position: absolute;
            right: 10px;
            top: 13px;
            height: 35px;
          }

          @media only screen and (min-width: 700px) {
            .modal{
              width: 650px;
            }
          }
        `}</style>
      </div>
    </div>
);
}
