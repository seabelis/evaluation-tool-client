import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";
import Logout from "./Logout"
import {logout } from "../actions/auth"

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("Check for jwt LoginFormContainer:", this.props.jwt);
    console.log("user: ", this.state.email);
    if (this.props.jwt !== null)
      return <div>Logged in as: {this.state.email} <Logout/></div>;
    return this.props.token ? (
      // If we have a token, redirect to Home
      <Redirect to="/" />
    ) : (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
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
  { login, logout}
)(LoginFormContainer);
