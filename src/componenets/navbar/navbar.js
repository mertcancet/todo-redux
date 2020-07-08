import React from "react";
import "./navbar.css";
import I from "immutable";

import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardText: "",
      columnText: "",
      cardColumn: "",
    };
    this.handleCardText = this.handleCardText.bind(this);
    this.handleColumnText = this.handleColumnText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCardText(value) {
    this.setState({ cardText: value });
  }
  handleColumnText(value) {
    this.setState({ columnText: value });
  }
  handleChange(event) {
    this.setState({ cardColumn: event.target.value });
  }
  handleSubmit(e) {
    console.log(
      this.props.addCard({
        id: Math.random(),
        cardText: this.state.cardText,
        cardColumn: this.state.cardColumn,
      })
    );
    e.preventDefault();
  }
  render() {
    const {  columnText } = this.state;

    return (
      <div className="navbar-wrapper">
        navbar
        <div className="cards ">
          add cards
          <br />
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.handleCardText(e.target.value)}
            ></input>
            <div>
              <select name="" id="" onChange={this.handleChange}>
                {this.props.columnList.map((each) => {
                  return (
                    <option
                      key={each.get("id", Math.random())}
                      value={each.get("text")}
                    >
                      {each.get("text", "gelmedi")}
                    </option>
                  );
                })}
              </select>
            </div>
            <input type="submit" value="gönder" />
          </form>
        </div>
        ---------------------------------------
        <div className="colomn ">
          add column
          <br />
          <input
            onChange={(e) => this.handleColumnText(e.target.value)}
          ></input>
          <button
            className="add-colomn btn"
            onClick={() =>
              this.props.addColumn({
                id: Math.random(),
                text: columnText,
              })
            }
          >
            Kolon Ekle
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    columnList: store.get("columnList", I.List()),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (add) => dispatch({ type: "ADD_CARD", data: add }),
    addColumn: (add) => dispatch({ type: "ADD_COLUMN", data: add }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
