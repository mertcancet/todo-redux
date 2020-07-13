import React from "react";
import { withRouter } from "react-router-dom";

class Head extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div>
        Burası head
        <button onClick={() => history && history.push("/goodbye")}>
          Çıkış Yap
        </button>
      </div>
    );
  }
}
export default withRouter(Head);
