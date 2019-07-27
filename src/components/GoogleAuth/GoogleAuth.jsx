import React, { Component } from "react";
class GoogleAuth extends Component {
  state = {};

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.init({
        clientId: "",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;
