export default function Infographic(props) {
  return (
    <div id="infographic" className="infographic">
      <div className="image-div">
      </div>
      <div className='text-div'>
        <div className="text-inner-div">
          <h3 className="header" >{props.title}</h3>
          <p className="text" >{props.text}</p>
        </div>
      </div>
    <style jsx>{`
        .infographic{
          box-sizing: border-box;
          display: block;
          position: relative;
          width: 100%;
          font-size: 0;
          height: 500px;
        }
        .image-div{
          box-sizing: border-box;
          display: inline-block;
          background-image: url(${props.url});
          background-size: cover;
          width: 50%;
          height: 100%;
          margin: 0;
        }
        .text-div {
          box-sizing: border-box;
          display: inline-block;
          position: relative;
          width: 50%;
          height: 100%;
          background-color: #1e1e1e;
          color: white;
          font-family: "Segoe UI", "Helvetica Neue", Helvetica, sans-serif;
          font-size: 18px;
          text-align: center;
          padding: 70px;
          float: ${props.textFloat};
        }
        .text-inner-div{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        .header{
          color: Turquoise;
          font-size: 2.2em;
          font-weight: 100;
          margin-top: 0;
        }
        .text{
          font-weight: 100;
          font-size: 1.1em;
        }

        @media only screen and (max-width: 575px) {
          .infographic{
            height: none;
          }
          .image-div{
            background-size: cover;
            height: 250px;
          }
        }

        @media only screen and (max-width: 1079px) {
          .text-div, .image-div{
            width: 100%;
          }
        }
      `}</style>
    </div>
);
}
