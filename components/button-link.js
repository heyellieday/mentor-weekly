import Link from "next/link";

export default function ButtonLink(props) {
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
    } else {
      return "6px 80px";
    }
  }

  function borderwidth() {
    if (props.size) {
      return ("1px");
    } else {
      return ("2px");
    }
  }
  function link() {
    if (props.text === "help") {
      return ("/help");
    } else if (props.text === "log out") {
        return ("/");
    } else if (props.text === "dashboard" && props.role === "mentor") {
        return ("/mentor-dashboard");
    } else if (props.text === "dashboard"&& props.role === "mentee")  {
        return ("/mentee-dashboard");
    } else if (props.text === "learn more") {
        return ("/#infographic");
    } else if (props.text === "sign up"|| props.text === "get involved") {
      return ("/#signup");
    }
  }

  return (
    <span className='button-span'>
      <div className='button-div'>
      <Link href={link()}>
        <a>
          <button className="button" onClick={props.onClick ? props.onClick : ""}>{props.text}</button>
        </a>
      </Link>
      </div>
      <style jsx>{`
        .button{
          box-sizing: border-box;
          background-color: ${props.backgroundColor};
          color: ${props.color};
          border: ${props.border ? props.border : borderwidth() + " solid "+ props.color};
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
          display: ${props.block ? "block" : "inline"};
        }
      `}</style>
    </span>
);
}