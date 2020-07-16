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
  cardHandleSubmit(e, index) {
    // console.log("istenilen", this.props.columnList.getIn([index, "text"]));
    let value = this.props.columnList.getIn([index, "text"]);
    console.log(value);
    e.preventDefault();
    this.setState({
      cardColumn: value,
    });
    this.setState({ isAddCardHidden: !this.state.isAddCardHidden });
    console.log("carddcolymn", this.state.cardColumn);
    this.props.addCard({
      id: Math.random(),
      cardText: this.state.cardText,
      cardColumn: this.state.cardColumn,
    });
  }
  handleCardText(value) {
    console.log("handleCardText");
    this.setState({ cardText: value });
  }

  render() {
    const { isAddCardHidden } = this.state;
    return (
      <div className="boardColumn">
        {this.props.columnList.map((each, index) => {
          return (
            <div
              className="boardColumn__body"
              key={each.get("id", Math.random())}
            >
              <h1 className="boardColumn__body--header">
                {each.get("text", "")}
              </h1>
              <br />
              {this.props.cardList.map((card, index) => {
                if (card.get("cardColumn") === each.get("text")) {
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
                }
              })}
              <div className="boardColumn__addCard">
                <button
                  className="boardColumn__addCard--addCardbtn"
                  onClick={this.toggleAddCard}
                >
                  {isAddCardHidden ? "AddCard" : "Hide AddCard"}
                </button>
                {!isAddCardHidden ? (
                  <div  >
                    <form onSubmit={(e) => this.cardHandleSubmit(e, index)}>
                      <label className="boardColumn__addCard--header">
                        Card header
                      </label>
                      <input
                        className="boardColumn__addCard--input"
                        type="text"
                        onChange={(e) => this.handleCardText(e.target.value)}
                      ></input>
                      <input
                        className="boardColumn__addCard--addCardbtn"
                        type="submit"
                      ></input>
                    </form>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              {this.props.columnList.get(index).id}
              {console.log(this.props.columnList.getIn([index, "text"]))}
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
