export default function PhotoCredit(props) {
  return (
    <div>
      <div className="credit-div">
        <div className="x-div">
          <button onClick={props.close}>x</button>
        </div>
        <p>
          <a
            href="https://pixabay.com/en/smile-profile-face-male-portrait-1726471/"
            alt="Portrait Source"
          >
            Male Portrait{" "}
          </a>
          by
          <a
            href="https://pixabay.com/en/users/Raduzak-669296/"
            alt="Raduzak on Pixabay"
          >
            {" "}
            Raduzak{" "}
          </a>
          licensed under
          <a
            href="https://creativecommons.org/licenses/by/2.0/"
            alt="Creative Commons license"
          >
            {" "}
            CC BY 2.0
          </a>
        </p>
        <p>
          All other photographs are by
          <a
            href="https://www.flickr.com/photos/wocintechchat/"
            alt="WOC in Tech on Flickr"
          >
            {" "}
            WOCinTech{" "}
          </a>
          licensed under
          <a
            href="https://creativecommons.org/licenses/by/2.0/"
            alt="Creative Commons license"
          >
            {" "}
            CC BY 2.0
          </a>
        </p>
      </div>
      <img className="login-point" src="/static/login-point.svg" />
      <style jsx>{`
        .credit-div {
          background-color: #1e1e1e;
          color: white;
          height: 120px;
          font: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          position: fixed;
          bottom: 88px;
          right: 20px;
          width: 300px;
          padding: 8px 20px 8px 20px;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
          text-align: center;
        }
        .login-point{
          transform: rotate(60deg);
          position: fixed;
          bottom: 70px;
          right: 30%;
          z-index: 1;
          filter: drop-shadow(0 0 5px #000000);
        }
        .x-div{
          position: absolute;
          right: 3px;
          top: 3px;
          color: black;
          z-index: 2;
          border: none;
        }
        button{
          color: coral;
          background-color: #1e1e1e;
          border: none;
          font-weight: 100;
        }
        a{
          color: turquoise;
        }
        p, a {
          font-weight: 200;
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
        @media only screen and (min-width: 850px) {
          .credit-div {
            right: 20%;
            width: 300px;
          }
          .login-point{
            right: 35%;
          }
        }
        @media only screen and (min-width: 1000px) {
          .credit-div {
            right: 30%;
            width: 300px;
          }
          .login-point{
            right: 40%;
          }
      `}</style>
    </div>
  );
}
