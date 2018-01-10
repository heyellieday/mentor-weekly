import Button from '../components/button';

export default function Login(props) {
  return (
    <div>
      <img className="login-point" src="/static/login-point.svg" />
      <div className='login-div'>
          <label htmlFor="email"></label>
          <input name="email" placeholder="email"></input>
          <label htmlFor="password"></label>
          <input name="password" placeholder="password"></input>
          <Button backgroundColor="#1e1e1e" size="small" color="white" text="log in to mentor weekly"/>

      </div>
      <style jsx>{`
        .login-div {
          background-color: #1e1e1e;
          height: 150px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: absolute;
          top: 25px;
          right: 57px;
          width: 200px;
          padding: 16px 16px 12px 16px;
        }
        .login-point{
          position: absolute;
          top: 0px;
          right: 157px;
        }
        input{
          display: block;
          margin: 16px auto 8px auto;
          border: 1px solid white;
          border-radius: 3px;
          width: 162px;
          padding: 1px 5px;
        }
        input::placeholder{
          font-weight: 100;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
