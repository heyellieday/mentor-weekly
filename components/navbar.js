import Button from "../components/button";
import ButtonLink from "../components/button-link";
import Auth from "../services/auth.js";

const auth = new Auth();

export default function Navbar(props) {
  return (
    <div className={props.loggedin ? "nav" : "nav landing-nav"}>
      <div className="logo">
        <img
          className="mw-logo"
          src="../static/mentor-weekly-logo.svg"
          width="100%"
          alt="wocintech stock photo"
        />
      </div>
      <div className={props.loggedin ? "right" : "right landing-right"}>
        {props.loggedin ? (
          <ButtonLink
            linkTo={
              props.user.role === "mentor"
                ? "/mentor-dashboard"
                : "/mentee-dashboard"
            }
            size="small"
            color="#303030"
            backgroundColor="white"
            text="dashboard"
            border="none"
            role={props.user.role}
          />
        ) : null}
        {props.loggedin && props.user.role === "mentor" ? (
          <ButtonLink
            linkTo="/pick-a-mentee"
            size="small"
            color="#303030"
            backgroundColor="white"
            text="pick a mentee"
            border="none"
          />
        ) : null}
        {props.loggedin ? null : (
          <Button
            size="small"
            color="#303030"
            backgroundColor="white"
            text="log in"
            onClick={auth.login}
            border="none"
          />
        )}
        {props.loggedin ? (
          <ButtonLink
            linkTo="/help"
            size="small"
            color="#303030"
            backgroundColor="white"
            text="help"
            border="none"
          />
        ) : null}
        {props.loggedin ? (
          <ButtonLink
            linkTo="/"
            size="small"
            color="Turquoise"
            backgroundColor="white"
            text="log out"
            onClick={auth.logout}
          />
        ) : (
          <ButtonLink
            linkTo="#signup"
            size="small"
            color="Turquoise"
            backgroundColor="white"
            text="sign up"
          />
        )}
      </div>

      <style jsx>{`
        .nav {
          background-color: white;
          border-bottom: 1px solid lightgray;
          height: 160px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: relative;
          top: 0px;
          right: 0px;
          left: 0px;
          padding: 15px;
        }
        .right {
          position: relative;
          margin: 0 auto;
          width: 150px;
          background: white;
        }
        .landing-nav {
          height: 65px;
          padding: 0;
        }
        .landing-right {
          position: absolute;
          right: 0;
          padding: 13px;
          width: 210px;
          height: 39px;
          text-align: right;
        }
        .logo {
          position: absolute;
          left: 30px;
          top: 15px;
        }
        .mw-logo {
          height: 40px;
        }

        @media only screen and (min-width: 600px) {
          .nav {
            height: 65px;
            padding: 0;
          }
          .right {
            position: absolute;
            right: 0;
            padding: 13px;
            width: 500px;
            height: 39px;
            text-align: right;
          }
          .landing-right {
            width: 500px;
          }
        }
      `}</style>
    </div>
  );
}
