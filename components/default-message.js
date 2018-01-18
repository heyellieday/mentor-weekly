export default function DefaultMessage(props) {
  return (
      <div className="default-message">
          <h2 className="default-header">Welcome to Mentor Weekly</h2>
          <p className="default-p">You will receive an email at the address you provided with info about your match.</p>
          <style jsx>{`
            .default-message{
              background-color: white;
              padding: 70px 45px;
              color: #1e1e1e;
              display: inline-block;
              font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
              font-weight: 200;
              width: 70%;
              filter: drop-shadow(0 0 15px #9E9E9E);
            }
            .default-header{
              font-weight: 100px;
              color: #00C1B8;
            }
            @media only screen and (min-width: 600px) {
              .default-message{
                width: 70%;
              }
            }
        `}</style>
      </div>
    )
  }
