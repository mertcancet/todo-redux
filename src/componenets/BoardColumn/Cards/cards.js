import React from "react";

class Card extends React.Component {
  render() {
    const { id, cardText, cardColumn } = this.props;
    return (
      <div>
        <h1>cardText: {cardText}</h1>
        <h2>cardColumn:{cardColumn}</h2>
        <h3>id:{id}</h3>
      </div>
    );
  }
}
export default Card;
