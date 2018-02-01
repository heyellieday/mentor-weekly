export default function ButtonStyles(props) {
  return (
    <style jsx>{`
      .button {
        box-sizing: border-box;
        background-color: ${props.backgroundColor};
        color: ${props.color};
        border: ${props.border ? props.border : "1px solid " + props.color};
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        font-weight: 200;
        text-align: center;
      }
      .button:hover {
        cursor: pointer;
      }
      .button-div {
        display: inline;
        text-align: center;
      }
      .button-span {
        display: ${props.block ? "block" : "inline"};
      }
      .small {
        font-size: 14px;
        padding: 3px 18px;
        margin: 8px 15px;
      }
      .medium {
        font-size: 20px;
        padding: 6px 80px;
        margin: 27px;
      }
      .large {
        font-size: 23px;
        padding: 6px 40px;
        margin: 27px;
      }
      .cancel {
        font-size: 20px;
        padding: 6px 110px;
        margin: 0 27px 27px 27px;
      }
    `}</style>
  );
}
