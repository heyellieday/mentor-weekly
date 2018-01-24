import Button from "../components/button";

export default function DeletePrompt(props) {
  return (
    <div className="delete-prompt ${props.addClass?props.addClass}">
      <p>
        Are you sure you want to delete this mentee? You will also be removed
        from their dashboard.
      </p>
      <Button
        onClick={props.onClick}
        size="small"
        text="yes, delete mentee"
        color="black"
        backgroundColor="red"
      />
      <style jsx>{`
        .delete-prompt {
          display: block;
          background-color: white;
          color: red;
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 200;
          text-align: center;
        }
        p {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
