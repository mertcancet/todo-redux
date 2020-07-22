import React from "react";
import { connect } from "react-redux";
import I from "immutable";
class BoardColumnCard extends React.Component {
  render() {
    console.log("board column card index", this.props);
    const {
      match: { params },
    } = this.props;
    console.log(params.index);
    return (
      <div className="boardColumnCard">
        {this.props.columnList.map((each) => {
          if (each.get("id") === parseFloat(params.index))
            return (
              <div>
                <h1>oldu</h1>
                <h2>{typeof each.get("id")}</h2>
                <h4>{typeof parseFloat(params.index)}</h4>
                <h4>{each.get("text", "-")}</h4>
              </div>
            );
        })}
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    columnList: store.get("columnList", I.List()),
  };
}
export default connect(mapStateToProps)(BoardColumnCard);
