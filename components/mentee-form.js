export default function Signup(props) {
  return (
    <div className="signup">
      <form className="signup-form">
        <label htmlFor="email" className="block">which email address can we use to contact you about a mentorship?</label>
        <input type="email" name="email" className="block block-input"></input>
        <label htmlFor="goals" className="block">please describe your goals and what you&#39;d like to gain from a mentorship:</label>
        <input type="text" name="goals" className="block block-input"></input>
        <Button block="true" color="white" backgroundColor="turquoise" text="join mentor weekly" />
      </form>
      <style jsx>{`
          .signup {
            position: relative;
            background-color: Turquoise;
            padding: 45px;
            box-sizing: border-box;
            color: white;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
          }
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid white;
            border-radius: 3px;
          }
          .block{
            display: block;
            margin: 5px auto;
            width: 550px;
          }
          .block-input{
            margin: 5px auto 20px auto;
          }
        `}</style>
    </div>
);
}
