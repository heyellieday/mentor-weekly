import Button from '../components/button';

export default function Sidebar(props) {

  function profilePhoto() {
    if (props.user.photoUrl) {
      return props.user.photoUrl;
    } else {
      return ('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png');    }
  }

  return (
    <div className="sidebar">
        <div className="profile">
          <div className="profile-photo-container">
              <img className="profile-photo" src={profilePhoto()} alt="profile photo" />
          </div>
          <h2 className="username">{props.user.userName.firstName + " " + props.user.userName.lastName}</h2>
          <h3 className="role">{props.user.role}</h3>
          <Button
              size="small"
              text="update profile"
              color="#ffdacc"
              backgroundColor="#00C1B8"
              onClick={props.openUpdateModal}/>
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
        .sidebar{
          box-sizing: border-box;
          position: relative;
          background-color: #00C1B8;
          padding: 70px 45px;
          height: 100%;
          color: white;
          display: inline-block;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 300px;
          text-align: center;
          margin: 0 auto;
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
          .sidebar{
            top: 66px;
            left:0;
            bottom: 0;
            float: left;
            position: fixed;
            background-color: #00C1B8;
            padding: 70px 45px;
            height: 100%;
          }
        }
      `}</style>
    </div>
);
}
