export default function Navbar(props) {
  return (
    <div>
      <div className='nav'>
        <div className="logo">
          <img className="mw-logo" src='../static/mentor-weekly-logo.svg' width="100%" alt="wocintech stock photo" />
        </div>
        <div className="right">
          { props.loggedin? "Log out" : "Sign up" }
          { props.loggedin? "Help" : "Log in" }
        </div>
      </div>
      <style jsx>{`
        .nav {
          border: 1px solid lightgray;
          height: 65px;
          font-family: "helvetica-neue";
          position: absolute;
          top: 0px;
          right: 0px;
          left: 0px;
        }
        .right{
          position: absolute;
          right:0;
          top:15px;
        }
        .logo{
          position: absolute;
          left: 30px;
          top: 18px;
        }
        .mw-logo{
          height: 40px;
        }
      `}</style>
    </div>
  );
}
