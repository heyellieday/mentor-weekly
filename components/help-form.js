import Button from '../components/button';

export default function Helpform(props) {
  return (
    <div className="helpform">
      <div className="name-labels-div">
        <label htmlFor="firstName" className="name-label first-name">first</label>
        <label htmlFor="lastName" className="name-label">last name</label>
      </div>
        <input type="text" name="firstName" className="name-input"></input>
        <input type="text" name="lastName" className="name-input"></input>
        <label htmlFor="portfolio" className="block">please enter the url for your portfolio or website:</label>
        <input type="text" name="portfolio" className="block block-input"></input>
        <label htmlFor="background" className="block">please briefly describe your background/training:</label>
        <input type="text" name="background" className="block block-input"></input>
        <label htmlFor="languages" className="block">which coding languages and tools are you familiar with?</label>
        <input type="text" name="languages" className="block block-input"></input>
        <div className="extra"></div>
        <Button text="send message" color="turquoise" backgroundColor="#F4F4F4" />
  <style jsx>{`
          .helpform{
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            color: #1e1e1e;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
            margin: 0 auto;
            width: 300px;
          }
          legend{
            margin-bottom: 5px;
          }
          input{
            margin: 5px 0 20px 0;
            border: 1px solid turquoise;
            border-radius: 3px;
          }
          .block{
            display: block;
            margin: 0 auto;
            width: 300px;
          }
          .block-input{
            display: block;
            margin: 0 auto 20px auto;
            height: 50px;
          }
          .first-name:after{
            content: " & ";
          }
          .name-input{
            width: 300px;
          }

          @media only screen and (min-width: 961px) {
            .helpform{
              width: 600px;
            }
            .block{
              width: 550px;
            }
            .block-input{
              height: 20px;
              width: 550px;
            }
            .name-label{
              margin: 0 110px;
            }
            .name-input{
              width: 262px;
              margin: 5px 10px 20px 10px;
            }
            .first-name:after{
              content: " name";
            }
            .extra{
              height: 20px;
            }
          }
        `}</style>
    </div>
);
}
