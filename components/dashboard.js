import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Dashboard(props) {

  return (
    <div className="dashboard">
      <Navbar
          user={props.user}
          dashboard={props.dashboard}
          loggedin={props.loggedin}
          />
      <Sidebar user={props.user} openUpdateModal={props.openUpdateModal}/>
      <h1 className="title">{props.title}</h1>
      <div className="children">{props.children}</div>
      <style jsx>{`
        .dashboard{
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 100;
          background-color: #F4F4F4;
          text-align: center;
        }
        .title{
          display: inline-block;
          margin: 60px auto;
          font-weight: 100;
          font-size: 2.5em;
          clear: right;
          width: 300px;
        }
        .children{
          height: 100%;
          right: 0;
          position: relative;
          margin: 0 auto;
        }

        @media only screen and (min-width: 600px) {
          .dashboard{
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            position: fixed;
          }
          .title{
            display: inline-block;
            margin: 60px auto;
            padding-left: 300px;
          }
          .children{
            left: 300px;
            position: fixed;
            overflow: auto;
            margin-bottom: 30px;
          }
        }

      `}</style>
    </div>
);
}
