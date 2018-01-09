export default function MentorForm(props) {
  return (
    <div className="mentor-div">
        <label htmlFor="org" className="block">which organization do you currently work for?</label>
        <input type="text" name="org" className="block block-input"></input>
        <label htmlFor="experience" className="block">how many years of experience do you have?</label>
        <input type="text" name="experience" className="block block-input"></input>
        <label htmlFor="expertise" className="block">what areas of expertise could you share with a mentee?</label>
        <input type="text" name="expertise" className="block block-input"></input>
        <label htmlFor="looking-for" className="block">what are you looking for in a mentee?</label>
        <input type="text" name="looking-for" className="block block-input"></input>
        <style jsx>{`
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
