export default function Button(props) {
  return (
    <span className='button-span'>
      <div className='button-div'>
        <button className="button">{props.text}</button>
      </div>
      <style jsx>{`
        .button{
          box-sizing: border-box;
          color: ${props.color};
          border: 1px solid ${props.color};
          font: 23px "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 200;
          padding: 6px 30px;
          margin: 27px;
          text-align: center;
        }
        .button-div{
          display: inline;

          text-align: center;
        }
        .button-span{
          text-align: center;
        }
      `}</style>
    </span>
);
}
