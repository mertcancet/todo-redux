import React from "react";
import Card from "../Cards/cards";
import { connect } from "react-redux";
import I from "immutable";
import "./boardColumnCard.css";
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
              <div className="boardColumnCard__card">
                <h1 className="boardColumnCard__card--header">
                  {each.get("text", "-")}
                </h1>
                {this.props.cardList.map((card, index) => {
                  if (card.get("cardColumn", "") == each.get("text", "-"))
                    return (
                      <div
                        className="boardColumn__card"
                        key={card.get("id", Math.random())}
                      >
                        <Card
                          key={card.get("id", Math.random())}
                          id={card.get("id", "-")}
                          cardText={card.get("cardText", "")}
                          cardColumn={each.get("text", "")}
                          index={index}
                        />
                      </div>
                    );
                })}
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
    cardList: store.get("cardList", I.List()),
  };
}
export default connect(mapStateToProps)(BoardColumnCard);
