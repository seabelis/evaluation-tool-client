import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LoginFormContainer from './components/LoginFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={LoginFormContainer} />

        </div>
      </Provider>
    );
  }
}

export default App