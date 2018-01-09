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
        <Button text="send message" color="turquoise" backgroundColor="#F4F4F4" />
  <style jsx>{`
          .helpform{
            position: relative;
            background-color: #F4F4F4;
            padding: 45px;
            box-sizing: border-box;
            color: #1e1e1e;
            font: 18px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            font-weight: 200;
            text-align: center;
          }
          legend{
            margin-bottom: 5px;
          }
          input{
            margin: 5px 10px 20px 10px;
            border: 1px solid turquoise;
            border-radius: 3px;
          }
          .radio-button{
            position: relative;
            bottom: 2px;
          }
          .radio-div{
            margin-bottom: 5px;
          }
          .block{
            display: block;
            margin: 5px auto;
            width: 300px;
          }
          .block-input{
            margin: 5px auto 20px auto;
            height: 50px;
          }
          .first-name:after{
            content: " & ";
          }
          .name-input{
            width: 300px;
          }

          @media only screen and (min-width: 440px) {
            .block, .name-input{
              width: 330px;
            }
          }
          @media only screen and (min-width: 500px) {
            .block, .name-input{
              width: 400px;
            }
          }
          @media only screen and (min-width: 661px) {
            .block{
              width: 550px;
            }
            .block-input{
              height: 20px;
            }
            .name-label{
              margin: 0 110px;
            }
            .name-input{
              width: 262px;
            }
            .first-name:after{
              content: " name";
            }
          }
        `}</style>
    </div>
);
}
