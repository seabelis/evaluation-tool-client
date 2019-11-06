// components/Home.js

import React, { Component } from 'react'
import LoginFormContainer from "./LoginFormContainer";
// import BatchesListContainer from "./BatchesListContainer"


export default class Home extends Component {
  render () {
    return (
      <div><h1>Welcome!</h1>
      <LoginFormContainer />
      {/* <BatchesListContainer /> */}
      </div>
    )
    
  }
}