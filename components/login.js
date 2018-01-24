import Button from "../components/button";

export default function Login(props) {
  return (
    <div>
      <img className="login-point" src="/static/login-point.svg" />
      <div className="login-div">
        <label htmlFor="email" />
        <input name="email" placeholder="email" />
        <label htmlFor="password" />
        <input name="password" placeholder="password" />
        <Button
          backgroundColor="#1e1e1e"
          size="small"
          color="white"
          text="log in to mentor weekly"
        />
      </div>
      <style jsx>{`
        .login-div {
          background-color: #1e1e1e;
          height: 135px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: absolute;
          top: 24px;
          right: 52px;
          width: 205px;
          padding: 8px 16px 8px 16px;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
        }
        .login-point {
          position: absolute;
          top: 0px;
          right: 157px;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
        }
        input {
          display: block;
          margin: 16px auto 8px auto;
          border: 1px solid white;
          border-radius: 3px;
          width: 160px;
          padding: 1px 5px;
        }
        input::placeholder {
          font-weight: 100;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
