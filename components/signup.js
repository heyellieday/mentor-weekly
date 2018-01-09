import Button from '../components/button';

export default function Signup(props) {
  return (
    <form className="signup-form">

      <Button color="white" backgroundColor="turquoise" text="join mentor weekly" />
      <style jsx>{`
        .signup-form {
          position: relative;
          background-color: Turquoise;
          padding: 45px;
          box-sizing: border-box;
          color: white;
          font: 23px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          text-align: center;
        }
      `}</style>
    </form>
);
}
