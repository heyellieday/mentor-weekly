export default function Button(props) {
  function buttonSize() {
    if (props.size === "small") {
      return "14px";
    } else if (props.size === "large") {
      return "23px";
    } else {
      return "18px";
    }
  }

  function buttonPadding() {
    if (props.size === "small") {
      return "3px 18px";
    } else if (props.size === "large") {
      return "6px 40px";
    } else {
      return "6px 40px";
    }
  }

  return (
    <span className='button-span'>
      <div className='button-div'>
        <button className="button">{props.text}</button>
      </div>
      <style jsx>{`
        .button{
          box-sizing: border-box;
          color: ${props.color};
          border: ${props.border ? props.border : "1px solid "+ props.color};
          font: ${buttonSize()} "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 200;
          padding: ${buttonPadding()};
          margin: ${(props.size === "small") ? "8px 15px" : "27px" };
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
