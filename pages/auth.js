import Auth from "../services/auth";

const auth = new Auth();

const AuthCallback = ({ asPath }) => {
  if (process.browser) {
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication();
    }
  }
  return <div>authorizing...</div>;
};

AuthCallback.getInitialProps = async ({ asPath }) => {
  return { asPath };
};

export default AuthCallback;
