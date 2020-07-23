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
      isColumnRendererHidden: true,
      isCardRendererHidden: true,
    };
    this.handleCardText = this.handleCardText.bind(this);
    this.handleColumnText = this.handleColumnText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleHideCard = this.toggleHideCard.bind(this);
    this.toggleHideColumn = this.toggleHideColumn.bind(this);
    this.handleColumn = this.handleColumn.bind(this);
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
  handleColumn() {
    this.setState({
      isColumnRendererHidden: !this.state.isColumnRendererHidden,
    });
    this.props.addColumn({
      id: Math.random(),
      text: this.state.columnText,
    });
  }
  handleSubmit(e) {
    this.setState({ isCardRendererHidden: !this.state.isCardRendererHidden });
    this.props.addCard({
      id: Math.random(),
      cardText: this.state.cardText,
      cardColumn: this.state.cardColumn,
    });
    this.setState({ cardColumn: "" });
    e.preventDefault();
  }
  toggleHideColumn() {
    this.setState({
      isColumnRendererHidden: !this.state.isColumnRendererHidden,
    });
  }
  toggleHideCard() {
    this.setState({ isCardRendererHidden: !this.state.isCardRendererHidden });
  }
  render() {
    const { isColumnRendererHidden, isCardRendererHidden } = this.state;

    return (
      <div className="navbar">
        <button
          className="navbar__hideColumnBtn"
          onClick={this.toggleHideColumn}
        >
          {isColumnRendererHidden ? "Kolon Ekle" : "Kolon Ekle Kapat"}
        </button>
        <button className="navbar__hideCardBtn" onClick={this.toggleHideCard}>
          {isCardRendererHidden ? "Kart Ekle" : "Kart Ekle Kapat"}
        </button>
        {!isColumnRendererHidden ? (
          <div className="navbar__addColumn__wraper">
            <div className="navbar__addColumn ">
              <h2 className="navbar__addColumn--header">Kolon Ekleyin</h2>
              <br />
              <input
                className="navbar__addColumn--input"
                onChange={(e) => this.handleColumnText(e.target.value)}
              ></input>
              <button
                className="navbar__addColumn--btn"
                onClick={this.handleColumn}
              >
                Kolon Ekle
              </button>
            </div>
          </div>
        ) : (
          <p></p>
        )}
        {!isCardRendererHidden ? (
          <div className="navbar__addCard__wrapper">
            <div className="navbar__addCard">
              <h2 className="navbar__addCard--header">Kart ekleyin</h2>
              <br />
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={(e) => this.handleCardText(e.target.value)}
                ></input>
                <div className="navbar__addCard--form">
                  <h3 className="navbar__addCard--selectionHeader">
                    Kolon seçiniz
                  </h3>
                  <select name="" id="" onChange={this.handleChange}>
                    <option value="" defaultValue="">
                      Kolon seciniz
                    </option>
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
                  <input
                    type="submit"
                    value="gönder"
                    className="navbar__addCard--btn"
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <p></p>
        )}
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
