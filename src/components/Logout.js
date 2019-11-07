// components/Logout.js

import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
class Logout extends React.Component {
  logOut = event => {
    console.log("logout called?");
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div>
        <button onClick={this.logOut} className="button">
          Log out
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    jwt: state.auth,
    user: state.email
  };
};
export default connect(
  mapStateToProps,
  { logout }
)(Logout);
