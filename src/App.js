import React from "react";
import "./App.css";
import Navbar from "./componenets/navbar/navbar";
import BoardColumn from "./componenets/BoardColumn/boardColumn";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          selam
          <Navbar />
          <BoardColumn />
        </div>
      </Provider>
    );
  }
}
export default App;
