// components/Home.js

import React, { Component } from 'react'
import LoginFormContainer from "./LoginFormContainer";


export default class Home extends Component {
  render () {
    return (
      <div><h1>Welcome!</h1>
      <LoginFormContainer />
      </div>
    )
    
  }
}