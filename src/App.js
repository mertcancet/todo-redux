import React from "react";
import "./App.css";
import Head from "./componenets/Head/head";
import Welcome from "./componenets/Welcome/welcome";
import Todo from "./componenets/toDo/todo";
import Goodbye from "./componenets/Goodbye/goodbye";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoardColumnCard from "./componenets/BoardColumn/boardColumnCard/boardColumnCard";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path={"/"} component={Welcome} />
            <Route exact path={"/todo"} component={Todo} />
            <Route exact path={"/todo/:index"} component={BoardColumnCard} />
            <Route path={"/goodbye"} component={Goodbye} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
