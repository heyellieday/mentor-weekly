export default function DefaultMessage(props) {
  function message() {
    if (props.role === "mentor") {
      return (
        <p className="default-p">
          Go to your <em>"pick a mentee"</em> page to check out available
          candidates.
        </p>
      );
    } else if (props.role === "mentee") {
      return (
        <p className="default-p">
          You will receive an email at the address you provided once we find you
          the perfect mentor.
        </p>
      );
    } else {
      return (
        <p className="default-p">
          You have been sent a verification email. Click the "verify" button in
          your email to access your profile.
        </p>
      );
    }
  }
  return (
    <div className="default-message">
      <h2 className="default-header">Welcome to Mentor Weekly</h2>
      {message()}
      <style jsx>{`
        .default-message {
          background-color: white;
          padding: 70px 45px;
          color: #1e1e1e;
          display: inline-block;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: 70%;
          filter: drop-shadow(0 0 15px #9e9e9e);
        }
        .default-header {
          font-weight: 100px;
          color: #00c1b8;
        }
        @media only screen and (min-width: 600px) {
          .default-message {
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
}
