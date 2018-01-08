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
          font: 23px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          padding: 70px;
          text-align: center;
        }
        .orange{
          color: coral;
        }
      `}</style>
    </div>
);
}
