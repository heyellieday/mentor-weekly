export default function Largequote(props) {
  return (
    <div className="largequote-div">
      <div className='largequote'>
        {props.textA}
        <span className="orange">{props.textOrange}</span>
        {props.textB}
      </div>
      <style jsx>{`
        .largequote {
          color: grey;
          font: 23px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          padding: 90px;
          text-align: center;
          clear: both;
        }
        .orange{
          color: coral;
        }
      `}</style>
    </div>
);
}
