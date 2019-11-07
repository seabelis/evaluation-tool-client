// App.js
import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import BatchDetailsContainer from "./components/BatchDetailsContainer"
import StudentsListContainer from "./components/StudentsListContainer"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/batches/:id" exact component={BatchDetailsContainer} />
          <Route path="/students" exact component={StudentsListContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;

