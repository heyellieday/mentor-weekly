import auth0 from "auth0-js";

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "DOMAIN.auth0.com",
      clientID: "CLIENT_ID",
      redirectUri: "http://localhost:8080/auth",
      audience: "API_AUDIENCE",
      responseType: "token id_token",
      scope: "openid profile"
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  updateUserData(newData) {
    console.log("updateUserData is running");
    fetch(`api/users/`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: new Headers({
        Authorization: `Bearer ${this.getAccessToken()}`,
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        //console.log(this.props.user);
        return res.json();
      })
      //.then(() => (this.props.loggedin ? this.props.updateDashboard() : ""))
      .catch(err => console.log(err));
    // this.setState({
    //   error: "Could not load user"
    // })
    // );
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log(authResult);
        // grab auth0 id and make new user with saved form data
        const formData = JSON.parse(localStorage.getItem("new_user_form"));
        formData.authId = authResult.idTokenPayload.sub;
        console.log(formData);
        this.updateUserData(formData);
      } else if (err) {
        // navigate to the home route
        console.log(err);
      }
    });
  };

  setSession = authResult => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    // navigate to the home route
  };

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  };

  getProfile = cb => {
    if (!process.browser) {
      return;
    }
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  };
}
