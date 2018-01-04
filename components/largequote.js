export default function Largequote(props) {
  return (
    <div>
      <div className='largequote'>
        {props.textA}
        <span className="orange">{props.textOrange}</span>
        {props.textB}
      </div>
      <style jsx>{`
        .largequote {
          color: grey;
          font: 23px "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 200;
          padding: 50px;
          text-align: center;
        }
        .orange{
          color: #ff6200;
        }
      `}</style>
    </div>
);
}
