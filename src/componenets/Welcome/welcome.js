import React from "react";
import Navbar from "../navbar/navbar";
import "./welcome.css";
class Welcome extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div>
        <label>Hoşgeldiniz</label>
        <button onClick={() => history && history.push("/todo")}>
          Todo Gönder{" "}
        </button>
        <Navbar />
      </div>
    );
  }
}
export default Welcome;
