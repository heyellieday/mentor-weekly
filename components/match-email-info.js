function MatchEmailInfo(props) {
  const user = props.user;

  function profilePhoto() {
    if (props.user.photoUrl) {
      return props.user.photoUrl;
    } else {
      return "/static/default-profile.png";
    }
  }

  function displayMenteeFields() {
    return `<div>
        <p>
          <b>Goals: </b>
          ${props.user.goals}
        </p>
        <p>
          <b>Background: </b>
          ${props.user.background}
        </p>
        <p>
          <b>Experience: </b>
          ${props.user.experience}
        </p>
        <p>
          <b>Preferred Organizations: </b>
          ${props.user.organization}
        </p>
        <p>
          <b>Skills: </b>
          ${props.user.skills}
        </p>
        <p>
          <b>Portfolio: </b>
          ${props.user.portfolioUrl}
        </p>
        <p>
          <b>Availability: </b>
          ${props.user.availability}
        </p>
          <p>
            <b>Contact: </b>
            ${props.user.contact}
          </p>
        )}
      </div>`;
  }

  function displayMentorFields() {
    return `<div>
        <p>
          <b>Goals: </b>
          ${props.user.goals}
        </p>
        <p>
          <b>Experience: </b>
          ${props.user.experience}
        </p>
        <p>
          <b>Organization: </b>
          ${props.user.organization}
        </p>
        <p>
          <b>Expertise: </b>
          ${props.user.skills}
        </p>
          <p>
            <b>Portfolio: </b>
            ${props.user.portfolioUrl}
          </p>}
        <p>
          <b>Contact: </b>
          ${props.user.contact}
        </p>
      </div>`;
  }

  return `<div
      className=
        "match-info-div"
    >
      <div className="profile">
        <div className="profile-photo-name-div">
          <div className="profile-photo-container">
            <img
              className="profile-photo"
              src=${profilePhoto()}
              alt="profile photo"
            />
          </div>
          <h2 className="username">
            ${props.user.name.firstName + " " + props.user.name.lastName}
          </h2>
          <h3 className="role">${props.user.role}</h3>
        </div>
        <div className="profile-info-div">
          ${props.user.role === "mentee" && displayMenteeFields()}
          ${props.user.role === "mentor" && displayMentorFields()}
        </div>
      </div>
      <style jsx>{
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
          overflow: scroll;
        }
        .profile-photo-container{
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          background-color: #84D6D2;
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
          text-align: left;
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
              max-width: 200px;
            }
          }
          }</style>
    </div>`;
}
