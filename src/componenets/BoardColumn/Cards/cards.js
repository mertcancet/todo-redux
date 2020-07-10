import React from "react";

class Card extends React.Component {
  render() {
    const { cardText, cardColumn } = this.props;
    return (
      <div>
        <h3>cardText: {cardText}</h3>
        <h4>cardColumn:{cardColumn}</h4>
      </div>
    );
  }
}
export default Card;
