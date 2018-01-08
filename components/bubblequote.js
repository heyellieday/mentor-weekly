export default function Bubblequote(props) {
  return (
    <div className="bubblequote-div">
        <div className="bubblequote">{props.text}</div>
          <div className="author-div" >{props.author}</div>
        {props.role}
        {props.org}
      <style jsx>{`
        .bubblequote-div {
          color: white;
          display: inline;
          height: 100%;
          font: 23px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          margin: 30px;
          padding: 90px;
          text-align: center;
        }
        .bubblequote{
          padding: 25px;
          background-color: #00C1B8;
          font-size: 0.8em;
          border-radius: 15px;
        }
      `}</style>
    </div>
);
}
