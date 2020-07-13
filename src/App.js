import React from "react";
import "./App.css";
import Head from "./componenets/Head/head";
import Welcome from "./componenets/Welcome/welcome";
import Todo from "./componenets/toDo/todo";
import Goodbye from "./componenets/Goodbye/goodbye";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path={"/"} component={Welcome} />
            <Route path={"/todo"} component={Todo} />
            <Route path={"/goodbye"} component={Goodbye} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
