import React from "react";
import Card from "./Cards/cards";
import I from "immutable";
import { connect } from "react-redux";

class BoardColumn extends React.Component {
  render() {
    return (
      <div>
        <h1>BoardColumn</h1>
        {this.props.columnList.map((each) => {
          return (
            <div className="boardColumn" key={each.get("id", Math.random())}>
              <h1>{each.get("text", "")}</h1>
              <br />
              {each.get("id", Math.random())}

              {this.props.cardList.map((card) => {
                if (card.get("cardColumn") === each.get("text")) {
                  return (
                    <div>
                      <Card
                        key={card.get("id", Math.random())}
                        id={card.get("id", "-")}
                        cardText={card.get("cardText", "")}
                        cardColumn={each.get("text", "")}
                      />
                    </div>
                  );
                }
              })}
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
    cardList: store.get("cardList", I.List()),
  };
}
function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardColumn);
