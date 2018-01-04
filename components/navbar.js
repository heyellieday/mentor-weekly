export default function Navbar(props) {
  return (
    <div>
      <div className='nav'>
        <div className="logo">LOGO HERE</div>
        <div className="right">
          { props.dashboard? "Logout" : "Signup" }
        </div>
      </div>
      <style jsx>{`
        .nav {
          border: 1px solid lightgray;
          height: 50px;
          font-family: "helvetica-neue";
          position: fixed;
          top: 0px;
          right: 0px;
          left: 0px;
        }
        .right{
          position: absolute;
          right:0;
          top:15px;
        }
        .logo{
          position: absolute;
          left:0;
          top: 15px;
        }
      `}</style>
    </div>
  );
}
