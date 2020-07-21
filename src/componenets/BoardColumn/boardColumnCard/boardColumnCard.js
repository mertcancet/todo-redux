import React from "react";
import { connect } from "react-redux";
import I from "immutable";
class BoardColumnCard extends React.Component {
  render() {
    console.log("board column card index", this.props);
    const {
      match: { params },

      columnList,
    } = this.props;
    console.log(params.index);
    return (
      <div>
        selam*--
        {columnList.getIn([params.index, "text", "id"], "boş")}
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
