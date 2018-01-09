export default function Sidebar(props) {

  function profilePhoto() {
    if (props.profilePhoto) {
      return props.profilePhoto;
    } else {
      return ('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png');    }
  }
  return (
    <div className="sidebar">
        <div className="bubblequote">
         <div className="profile-photo">
            <img className="profile-photo" src={profilePhoto()} alt="profile photo" />
         </div>
        </div>
      <style jsx>{`
        .sidebar{
          background-color: #00C1B8;
          padding: 45px;
          height: 100%;
          color: white;
          display: inline-block;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 300px;
          text-align: center;
          float: left;
        }
        .profile-photo{
          width: 150px;
          border-radius: 50%;
          margin: 0 auto;
        }
      `}</style>
    </div>
);
}
