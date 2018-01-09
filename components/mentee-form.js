export default function MenteeForm(props) {
  return (
    <div className="mentee-div">
        <label htmlFor="portfolio" className="block">please enter the url for your portfolio or website:</label>
        <input type="text" name="portfolio" className="block block-input"></input>
        <label htmlFor="background" className="block">please briefly describe your background/training:</label>
        <input type="text" name="background" className="block block-input"></input>
        <label htmlFor="languages" className="block">which coding languages and tools are you familiar with?</label>
        <input type="text" name="languages" className="block block-input"></input>
        <label htmlFor="experience" className="block">what is your focus and experience level?</label>
        <input type="text" name="experience" className="block block-input"></input>
        <label htmlFor="org" className="block">what sort of organizations and positions would you like to learn more about?</label>
        <input type="text" name="org" className="block block-input"></input>
        <label htmlFor="schedule" className="block">what times are you available to meet with a mentor for 30 minutes?</label>
        <input type="text" name="schedule" className="block block-input"></input>
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
