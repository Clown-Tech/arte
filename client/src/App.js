import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"; //Switch and Route Library
import Routes from "./routes";
import "./App.scss";

class App extends Component {
  render() {
    const App = () => (
      <div id="main">
        <Switch>
          {Routes.map(route => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    );

    return (
      <React.Fragment>
        <App />
      </React.Fragment>
    );
  }
}

export default App;
