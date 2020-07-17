import React from "react";

import "./welcome.css";
class Welcome extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="welcome">
        <div className="welcome__wrapper">
          <h1 className="welcome__wrapper--header"> Hoşgeldiniz</h1>
          <button
            className="welcome__wrapper--btn"
            onClick={() => history && history.push("/todo")}
          >
            Todo Gönder{" "}
          </button>
        </div>
      </div>
    );
  }
}
export default Welcome;
