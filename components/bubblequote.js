export default function Bubblequote(props) {
  return (
    <div className="bubblequote-div">
        <div className="bubblequote">
         <div className="text">{props.text}</div>
        </div>
        <div className="cite-div">
          <div className="author-div" >{props.author}</div>
          {props.role}
          {props.org}
        </div>
      <style jsx>{`
        .bubblequote-div {
          position: relative;
          background-color: Turquoise;
          padding: 45px ${props.center ? 0 : ""};
          height: 440px;
          box-sizing: border-box;
          color: white;
          display: inline-block;
          font: 23px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          width: ${props.width};
          text-align: center;
          float: left;

        }
        .bubblequote{
          position: relative;
          box-sizing: border-box;
          background-color: #00C1B8;
          font-size: 0.8em;
          border-radius: 15px;
          height: 260px;
          width: 100%;
          padding: 25px;
          margin-bottom: 30px;
        }
        .text{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        .cite-div{
          margin-top: 30px;
        }

        @media only screen and (max-width: 500px) {
          .bubblequote{
            height: 300px;
          }
        }
        @media only screen and (max-width: 700px) {
          .bubblequote{
            height: 180px;
          }
        }
        @media only screen and (max-width: 900px) {
          .bubblequote-div {
            width: 100%;
            padding: 45px;
            height: 400px;
          }
          .bubblequote{
            height: 200px;
          }
        }
      `}</style>
    </div>
);
}
