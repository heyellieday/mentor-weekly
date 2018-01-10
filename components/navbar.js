import Button from '../components/button';

export default function Navbar(props) {
  return (
    <div className='nav'>
        <div className="logo">
          <img className="mw-logo" src='../static/mentor-weekly-logo.svg' width="100%" alt="wocintech stock photo" />
        </div>
        <div className="right">
          { props.loggedin ? <Button size="small" color="#303030" backgroundColor="white" text="dashboard" border="none"/> : ""}
          {(props.loggedin && props.user.role === "mentor") ? <Button size="small" color="#303030" backgroundColor="white" text="pick a mentee" border="none"/> : null}
          <Button size="small" color="#303030" backgroundColor="white" text={ props.loggedin? "help" : "log in" } onClick={props.onClick?props.onClick:null}border="none"/>
          <Button size="small" color="Turquoise" backgroundColor="white" text={ props.loggedin? "log out" : "sign up" }/>
        </div>

      <style jsx>{`
        .nav {
          background-color: white;
          border-bottom: 1px solid lightgray;
          height: 65px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: relative;
          top: 0px;
          right: 0px;
          left: 0px;
        }
        .right{
          position: absolute;
          right:0;
          padding: 13px;
        }
        .logo{
          position: absolute;
          left: 30px;
          top: 15px;
        }
        .mw-logo{
          height: 40px;
        }
      `}</style>
    </div>
  );
}
