import React from "react";
import { connect } from "react-redux";
import "./card.css";
class Card extends React.Component {
  render() {
    const { cardText } = this.props;
    return (
      <div className="card">
        <h3 className="card--header">Yapılacak: {cardText}</h3>

        <button
          className="card--deleteBtn"
          onClick={() => this.props.deleteCard(this.props.index)}
        >
          {"Kartı Sil"}
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
