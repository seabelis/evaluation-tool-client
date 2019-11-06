// components/Dashboard.js

import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";
import Logout from "./Logout";
import { logout } from "../actions/auth";
import BatchesListContainer from "./BatchesListContainer";

class Dashboard extends React.Component {
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
    console.log("Check for jwt Dashboard:", this.props.jwt);
    console.log("check user: ", this.state.email);
    if (this.props.jwt !== null)
      // return <div>Logged in as: {this.state.email} <Logout/>
      return (
        <div>
          Logged in. <Logout />
          <BatchesListContainer />
        </div>
      );
    return this.props.token ? (
      // If we have a token, redirect to Home
      <Redirect to="/" />
    ) : (
      <div>
        Please Login
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jwt: state.auth,
    user: state.email,
    loggedIn: state.auth !== null
  };
};

export default connect(
  mapStateToProps,
  { login, logout }
)(Dashboard);
