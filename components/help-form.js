import Button from '../components/button';

export default function Helpform(props) {
  return (
    <div className="helpform">
      <form>
        <p className="message">Use this form to get in contact with someone at Mentor Weekly.  We are happy to help!</p>
        <label htmlFor="firstName" className="name-label first-name">first name</label>
        <input type="text" id="firstName" className="block block-input"></input>
        <label htmlFor="lastName" className="name-label">last name</label>
        <input type="text" id="lastName" className="block block-input"></input>
        <label htmlFor="email" className="block">email address</label>
        <input type="text" id="email" className="block block-input"></input>
        <label htmlFor="subject" className="block">message subject</label>
        <input type="text" id="subject" className="block block-input"></input>
        <label htmlFor="issue" className="block">please describe your issue here:</label>
        <textarea type="text" id="issue" className="block block-input issue"></textarea>
        <div className="extra"></div>
        <Button text="send message" color="turquoise" backgroundColor="#F4F4F4" />
      </form>
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
          input, textarea{
            margin: 5px 0 20px 0;
            border: 1px solid turquoise;
            border-radius: 3px;
            font: 16px "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
            text-align: center;
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

          }
          .issue{
            height: 200px;
            text-align: left;
          }

          @media only screen and (min-width: 961px) {
            .helpform{
              width: 600px;
            }
            .block, .message{
              width: 550px;
            }
            .block-input, .name-label{
              height: 20px;
              width: 550px;
            }
            .issue{
              height: 140px;
            }
            .name-label{
              clear: both;
            }
            .extra{
              height: 20px;
            }
          }
        `}</style>
    </div>
);
}
