import Button from '../components/button';

export default function Navbar(props) {
  return (
    <div>
      <div className='nav'>
        <div className="logo">
          <img className="mw-logo" src='../static/mentor-weekly-logo.svg' width="100%" alt="wocintech stock photo" />
        </div>
        <div className="right">
          <Button size="small" color="#303030" text={ props.loggedin? "help" : "log in" } border="none"/>
          <Button size="small" color="Turquoise" text={ props.loggedin? "log out" : "sign up" } />
        </div>
      </div>
      <style jsx>{`
        .nav {
          border-bottom: 1px solid lightgray;
          height: 65px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: relative;
          top: 0px;
          right: 0px;
          left: 0px;
          padding: 0 20px;
        }
        .right{
          position: absolute;
          right:0;
          top:15px;
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
