import auth0 from "auth0-js";
import Router from "next/router";
const { API_AUDIENCE, API_URL, AUTH0_CLIENT_ID } = require("../config");

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "mentorweekly.auth0.com",
      clientID: AUTH0_CLIENT_ID,
      redirectUri: `${API_URL}/auth`,
      audience: API_AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile"
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  createUserProfile(newData) {
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
      .then(Router.replace(`${API_URL}/mentee-dashboard`))
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
        if (localStorage.getItem("new_user_form")) {
          const formData = JSON.parse(localStorage.getItem("new_user_form"));
          formData.authId = authResult.idTokenPayload.sub;
          this.createUserProfile(formData);
          localStorage.removeItem("new_user_form");
        } else {
          Router.replace(`${API_URL}/mentee-dashboard`);
        }
      } else if (err) {
        Router.replace(API_URL);
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
    Router.replace(API_URL);
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
