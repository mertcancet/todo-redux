import React from "react";
import { withRouter } from "react-router-dom";
import "./head.css";

class Head extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="head">
     
        <button
          className="head--todoBtn"
          onClick={() => history && history.push("/todo")}
        >
          ToDo
        </button>
        <button
          className="head--exitBtn"
          onClick={() => history && history.push("/goodbye")}
        >
          Çıkış Yap
        </button>
      </div>
    );
  }
}
export default withRouter(Head);
