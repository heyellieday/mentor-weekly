export default function Button(props) {
  function buttonSize() {
    if (props.size === "small") {
      return "14px";
    } else if (props.size === "large") {
      return "23px";
    } else {
      return "20px";
    }
  }

  function buttonPadding() {
    if (props.size === "small") {
      return "3px 18px";
    } else if (props.size === "large") {
      return "6px 40px";
    } else if (props.text === "cancel") {
      return "6px 110px";
    } else {
      return "6px 80px";
    }
  }

  function buttonMargin() {
    if (props.size === "small") {
      return "8px 15px";
    } else if (props.text === "cancel") {
      return "0 27px 27px 27px";
    } else {
      return "27px";
    }
  }

  function borderwidth() {
    if (props.size) {
      return "1px";
    } else {
      return "2px";
    }
  }

  return (
    <span className="button-span">
      <div className="button-div">
        <button
          className="button"
          type={props.type ? props.type : "button"}
          onClick={props.onClick ? props.onClick : null}
        >
          {props.text}
        </button>
      </div>
      <style jsx>{`
        .button {
          box-sizing: border-box;
          background-color: ${props.backgroundColor};
          color: ${props.color};
          border: ${props.border
            ? props.border
            : borderwidth() + " solid " + props.color};
          font: ${buttonSize()} "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 200;
          padding: ${buttonPadding()};
          margin: ${buttonMargin()};
          text-align: center;
        }
        .button-div {
          display: inline;
          text-align: center;
        }
        .button-span {
          display: ${props.block ? "block" : "inline"};
        }
      `}</style>
    </span>
  );
}
