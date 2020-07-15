import React from "react";
import Navbar from "../navbar/navbar";
import BoardColumn from "../BoardColumn/boardColumn";
import "./todo.css";
class Todo extends React.PureComponent {
  render() {
    return (
      <div>
        Todo sayfasındasın
        <Navbar />
        <BoardColumn />
      </div>
    );
  }
}
export default Todo;
