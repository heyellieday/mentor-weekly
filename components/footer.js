import Button from "../components/button";

export default function Footer(props) {
  return (
    <div>
      <div className="footer-div">
        <div className="logo">
          <img
            className="mw-logo"
            src="../static/mw-logo.svg"
            width="100%"
            alt="wocintech stock photo"
          />
        </div>
        <div className="buttons">
          <Button
            backgroundColor="#1e1e1e"
            size="small"
            color="Turquoise"
            text="	&#169;2018 Mentor Weekly"
            border="none"
          />
          <p className="bullet">·</p>
          <Button
            onClick={props.photoCredit}
            backgroundColor="#1e1e1e"
            size="small"
            color="Turquoise"
            text="Photo Credits"
            border="none"
          />
        </div>
      </div>
      <style jsx>{`
        .footer-div {
          background-color: #1e1e1e;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: relative;
          top: 0px;
          right: 0px;
          left: 0px;
          padding: 0 20px;
        }
        .buttons {
          display: block;
          padding: 13px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
        .logo {
          display: none;
        }
        .mw-logo {
          height: 30px;
        }
        .bullet {
          display: inline;
          font: 18px sans-serif;
          color: Turquoise;
          width: 5px;
          margin: 0;
        }

        @media only screen and (min-width: 440px) {
          .logo {
            display: inline;
            position: absolute;
            margin: 18px;
          }
        }
      `}</style>
    </div>
  );
}
