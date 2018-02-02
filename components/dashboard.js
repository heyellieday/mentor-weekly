import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Dashboard(props) {
  return (
    <div className={props.pickMentee ? "dashboard pick-mentee" : "dashboard"}>
      <Navbar
        user={props.user}
        dashboard={props.dashboard}
        loggedin={props.loggedin}
      />
      <Sidebar user={props.user} openUpdateModal={props.openUpdateModal} />
      <h1 className={props.pickMentee ? "title title-teal" : "title"}>
        {props.title}
      </h1>
      {props.pickMentee ? (
        <h2 className="message">
          Click 'add mentee' button to add that professional as your mentee.
          They will receive an email introducing you as their new mentor.
        </h2>
      ) : (
        ""
      )}
      <div className="children">{props.children}</div>
      <style jsx>{`
        .dashboard {
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 100;
          background-color: #f4f4f4;
          text-align: center;
        }
        .pick-mentee {
          background-color: #7c7c7c;
        }
        .title {
          display: inline-block;
          margin: 60px auto;
          font-weight: 100;
          font-size: 2.5em;
          clear: right;
          width: 300px;
        }
        .title-teal {
          color: white;
        }
        .children {
          height: 75%;
          right: 0;
          position: relative;
          margin: 0 auto;
        }
        .message {
          color: white;
          font-weight: 100;
          font-size: 1.3em;
          width: 300px;
          margin: 0 auto 60px auto;
        }

        @media only screen and (min-width: 600px) {
          .dashboard {
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            position: fixed;
          }
          .title,
          .message {
            padding-left: 300px;
          }
          .children {
            left: 300px;
            position: fixed;
            overflow: auto;
            margin-bottom: 30px;
          }
        }
        @media only screen and (min-width: 800px) {
          .message {
            width: 400px;
          }
        }
        @media only screen and (min-width: 1000px) {
          .message {
            width: 590px;
          }
        }
      `}</style>
    </div>
  );
}
