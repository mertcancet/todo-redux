import React from "react";
import { connect } from "react-redux";

class Card extends React.Component {
  render() {
    const { cardText, cardColumn } = this.props;
    return (
      <div>
        <h3>cardText: {cardText}</h3>
        <h4>cardColumn:{cardColumn}</h4>
        <button
          className="todo-delete-btn"
          onClick={() => this.props.deleteCard(this.props.index)}
        >
          {"Delete"}
        </button>
      </div>
    );
  }
}
function mapStatetoProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    deleteCard: (index) => dispatch({ type: "DELETE_TODO", data: index }),
  };
}
export default connect(mapStatetoProps, mapDispatchToProps)(Card);
