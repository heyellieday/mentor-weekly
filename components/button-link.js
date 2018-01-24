import Link from "next/link";

export default function ButtonLink(props) {
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
        <Link href={props.linkTo}>
          <a>
            <button
              className={props.size ? "button " + props.size : "button medium"}
            >
              {props.text}
            </button>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .button {
          box-sizing: border-box;
          background-color: ${props.backgroundColor};
          color: ${props.color};
          border: ${props.border
            ? props.border
            : borderwidth() + " solid " + props.color};
          font-family: "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 200;
          margin: ${props.size === "small" ? "8px 15px" : "27px"};
          text-align: center;
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
    </span>
  );
}
