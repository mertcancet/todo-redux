import React from "react";
import Card from "./Cards/cards";
import I from "immutable";
import { connect } from "react-redux";
import "./boardColumn.css";

class BoardColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddCardHidden: true,
      cardText: "",
      cardColumn: "",
    };
    this.toggleAddCard = this.toggleAddCard.bind(this);
    this.cardHandleSubmit = this.cardHandleSubmit.bind(this);
    this.handleCardText = this.handleCardText.bind(this);
  }
  toggleAddCard() {
    this.setState({ isAddCardHidden: !this.state.isAddCardHidden });
  }
  cardHandleSubmit(e) {
    e.preventDefault();
    this.setState({ isAddCardHidden: !this.state.isAddCardHidden });
    this.props.addCard({
      id: Math.random(),
      cardText: this.state.cardText,
      cardColumn: this.state.cardColumn,
    });
  }
  handleCardText(value) {
    this.setState({ cardText: value });
  }

  render() {
    const { isAddCardHidden } = this.state;
    return (
      <div className="boardColumn-wrapper">
        <h1>BoardColumn</h1>
        {this.props.columnList.map((each, index) => {
          return (
            <div className="boardColumn" key={each.get("id", Math.random())}>
              <h1>{each.get("text", "")}</h1>
              <br />

              {this.props.cardList.map((card,index) => {
                if (card.get("cardColumn") === each.get("text")) {
                  return (
                    <div key={card.get("id", Math.random())}>
                      <Card
                        key={card.get("id", Math.random())}
                        id={card.get("id", "-")}
                        cardText={card.get("cardText", "")}
                        cardColumn={each.get("text", "")}
                        index={index}
                      />
                    </div>
                  );
                }
              })}

              <button onClick={this.toggleAddCard}>
                {isAddCardHidden ? "AddCard" : "Hide AddCard"}
              </button>
              {!isAddCardHidden ? (
                <div>
                  <form onSubmit={this.cardHandleSubmit}>
                    <label>Card header</label>
                    <input
                      type="text"
                      onChange={(e) => this.handleCardText(e.target.value)}
                    ></input>
                    <input type="submit"></input>
                  </form>
                  {this.props.columnList.get("text", "gelmedi")}
                  {index}
                </div>
              ) : (
                <p>bye bye</p>
              )}
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
function mapDispatchToProps(dispatch) {
  return {
    addCard: (add) => dispatch({ type: "ADD_CARD", data: add }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardColumn);
