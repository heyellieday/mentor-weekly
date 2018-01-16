import Button from '../components/button';
import ButtonLink from '../components/button-link';

export default function MatchInfo(props) {

  function profilePhoto() {
    if (props.user.photoUrl) {
      return props.user.photoUrl;
    } else {
      return ('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png');    }
  }

  if (!props.user) {
  return(
    <div className="match-info-div">
      <h2>Welcome to Mentor Weekly!</h2>
      <p>You will find your mentee info here.</p>
      <p>Mentor Weekly will send you an email when we have found you the right match.</p>
    </div>);
  } else {
  return (
    <div className={props.pickMentee?"match-info-div no-shadow":"match-info-div"}>
        <div className="profile">
          <div className="profile-photo-name-div">
            <div className="profile-photo-container">
                <img className="profile-photo" src={profilePhoto()} alt="profile photo" />
            </div>
                <h2 className="username">{props.user.name.firstName + " " + props.user.name.lastName}</h2>
                <h3 className="role">{props.user.role}</h3>
                {(props.user.role === "mentor")? <ButtonLink size="small" text="change mentor" linkTo="/help" color="coral" backgroundColor="white" border="none"/> : null}
                {(props.user.role === "mentee" && props.pickMentee)? <Button size="small" text="add mentee" onClick={(e) => e.preventDefault()} color="turquoise" backgroundColor="white"/> : null}
                {(props.user.role === "mentee" && !props.pickMentee)? <Button size="small" text="remove mentee" onClick={(e) => e.preventDefault()} color="coral" backgroundColor="white" border="none"/> : null}
          </div>
          <div className="profile-info-div">
            <p><b>Goals: </b>{props.user.goals}</p>
            <p><b>Experience: </b>{props.user.experience}</p>
            <p><b>{(props.user.role === "mentor")?"Expertise: ": "Skills: "} </b>{props.user.skills}</p>
            {(props.user.role === "mentor") ? "" : <p><b>Portfolio: </b>{props.user.portfolioUrl}</p>}
            {(props.user.role === "mentor") ? "" : <p><b>Interested in: </b>{props.user.organization}</p>}
            {(props.user.role === "mentor")? "" : <p><b>Availability: </b>{props.user.availability}</p>}
            <p><b>Contact: </b>{props.user.contact}</p>
          </div>
        </div>
      <style jsx>{`
        .match-info-div{
          box-sizing: border-box;
          position: relative;
          background-color: white;
          padding: 70px 45px;
          color: #1e1e1e;
          display: inline-block;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 300px;
          text-align: center;
          margin: 0 auto 60px auto;
        }
        .profile-photo-container{
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
        }
        .profile-photo{
          height: 150px;
          margin: 0 auto;
        }
        .username{
          font-weight: 200;
          margin-bottom: 5px;
        }
        .role{
          font-weight: 100;
          margin: 0;
        }
        .profile-info-div{
          text-align: left
        }
        @media only screen and (min-width: 600px) {
          .match-info-div{
            filter: drop-shadow(0 0 15px #9E9E9E);
          }
          .no-shadow{
            filter: drop-shadow(0 0 0px #9E9E9E);
          }
        @media only screen and (min-width: 900px) {
          .match-info-div{
            padding: 30px;
            width: 80%;
          }
          .profile-photo-container{
            float: left;
            margin: 0 20px 20px 20px;
          }
          .profile-info-div{
            text-align: left;
            margin: 0 auto;
          }
          .profile-photo-name-div{
            float: left;
            padding: 0 20px 20px 0;
          }
        }
      `}</style>
    </div>
);
}}
