import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "221206019332-ahpq5ca6phundroevmr1qsirtoc0822d.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.onSignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.onSignOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div>IDK</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSignIn: id => {
      dispatch(actions.signIn(id));
    },
    onSignOut: () => {
      dispatch(actions.signOut());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
