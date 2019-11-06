// components/Home.js

import React, { Component } from 'react'
import Dashboard from './Dashboard';


export default class Home extends Component {
  render () {
    return (
      <div><h1>Welcome!</h1>
      <Dashboard />
      </div>
    )
    
  }
}