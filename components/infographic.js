export default function Infographic(props) {
  return (
    <div>
      <div className="image-div">
      </div>
      <div className='text-div'>
        <h3 className="header" >{props.title}</h3>
        <p className="text" >{props.text}</p>
      </div>
      <style jsx>{`
        .image-div{
          background-image: url('https://www.flickr.com/photos/wocintechchat/25167694534/in/album-72157665958495865/');
          width: 50%;
        }
        .text-div {
          width: 50%;
          background-color: #1e1e1e;
          color: white;
          font-family: "Segoe UI", "Helvetica Neue", Helvetica, sans-serif;
          padding: 70px;
          text-align: center;
        }
        .header{
          color: Turquoise;
          font-size: 2.1em;
          font-weight: 100;
        }
        .text{
          font-weight: 100;
          font-size: 1.1em;
        }
      `}</style>
    </div>
);
}
