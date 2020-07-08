import React from "react";
import Card from "./Cards/cards";
import I from "immutable";
import { connect } from "react-redux";

class BoardColumn extends React.Component {
  render() {
    return (
      <div>
        BoardColumn
        {this.props.columnList.map((each) => {
          return (
            <div className="boardColumn" key={each.get("id", Math.random())}>
              {each.get("id", Math.random())}
              <br />
              {each.get("text", "")}
            </div>
          );
        })}
        <Card />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    columnList: store.get("columnList", I.List()),
  };
}
function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardColumn);
