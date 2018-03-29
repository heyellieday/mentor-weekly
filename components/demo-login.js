import Button from '../components/button';
import Auth from "../services/auth.js";

const auth = new Auth();

export default function Login(props) {
  return (
    <div>
      <img className="login-point" src="/static/login-point.svg" />
      <div className='login-div'>
          <p>To demo the app, log in with:</p>
          <ul>
            <li><b>email</b>: mentorweeklydemo@gmail.com</li>
            <li><b>password</b>: password</li>
          </ul>
          <Button
            backgroundColor="#1e1e1e"
            size="small"
            color="turquoise"
            text="log in"
            border="1px solid turquoise"
            onClick={auth.login}
          />
      </div>
      <style jsx>{`
        .login-div {
          color: white;
          font-weight: 200;
          font-size: 14px;
          background-color: #1e1e1e;
          height: 135px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: absolute;
          top: 24px;
          right: 42px;
          width: 240px;
          padding: 8px;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
        }
        .login-point{
          position: absolute;
          top: 0px;
          right: 255px;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
        }
        input{
          display: block;
          margin: 16px auto 8px auto;
          border: 1px solid white;
          border-radius: 3px;
          width: 160px;
          padding: 1px 5px;
        }
        input::placeholder{
          font-weight: 100;
          font-size: 14px;
        }
        ul{
          padding-left: 0;
          list-style-type: none;
        }

        @media only screen and (min-width: 600px) {
          .login-div {
            position: absolute;
            right: 142px;
          }
          .login-point{
            right: 255px;
          }

        }
      `}</style>
    </div>
  );
}
