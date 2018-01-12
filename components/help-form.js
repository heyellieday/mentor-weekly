import Button from '../components/button';

export default function Helpform(props) {
  return (
    <div className="helpform">
      <p className="message">Use this form to get in contact with someone at Mentor Weekly.  We are happy to help!</p>
      <div className="name-labels-div">
        <label htmlFor="firstName" className="name-label first-name">first</label>
        <label htmlFor="lastName" className="name-label">last name</label>
      </div>
        <input type="text" name="firstName" className="name-input"></input>
        <input type="text" name="lastName" className="name-input"></input>
        <label htmlFor="email" className="block">email address</label>
        <input type="text" name="email" className="block block-input"></input>
        <label htmlFor="subject" className="block">message subject</label>
        <input type="text" name="subject" className="block block-input"></input>
        <label htmlFor="issue" className="block">please describe your issue here:</label>
        <input type="text" name="issue" className="block block-input issue"></input>
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
            height: 100vh;
          }
          input{
            margin: 5px 0 20px 0;
            border: 1px solid turquoise;
            border-radius: 3px;
          }
          .block, .message{
            display: block;
            margin: 0 auto;
            width: 300px;
          }
          .message{
            margin: 0 auto 50px auto;
          }
          .block-input{
            display: block;
            margin: 5px auto 20px auto;
            height: 50px;
          }
          .issue{
            height: 200px;
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
            .block, .message{
              width: 550px;
            }
            .block-input{
              height: 20px;
              width: 550px;
            }
            .issue{
              height: 140px;
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
