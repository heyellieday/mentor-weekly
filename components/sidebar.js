export default function Sidebar(props) {

  function profilePhoto() {
    console.log(props.user);
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
        </div>
      <style jsx>{`
        .sidebar{
          background-color: #00C1B8;
          padding: 70px 45px;
          height: 100%;
          color: white;
          display: inline-block;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 250px;
          text-align: center;
          float: left;
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
          font-weight: 300;
        }
      `}</style>
    </div>
);
}
