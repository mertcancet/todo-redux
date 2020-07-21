import React from "react";
import "./editColumn.css";
import { connect } from "react-redux";
class EditColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnEdit: "",
    };
    this.columnEditHandleSubmit = this.columnEditHandleSubmit.bind(this);
    this.handleColumnText = this.handleColumnText.bind(this);
  }

  columnEditHandleSubmit(e) {
    e.preventDefault();
    this.props.editColumn({
      index: this.props.index,
      id: this.props.id,
      text: this.state.columnEdit,
    });
  }
  handleColumnText(value) {
    this.setState({ columnEdit: value });
  }
  render() {
    const { id, columnEdit, index } = this.props;
    return (
      <div>
        <p>
          id:{id} \\n columnText:{columnEdit} \\n index:{index}
        </p>
        <form onSubmit={(e) => this.columnEditHandleSubmit(e)}>
          <label> Kolon ismini düzenleyin</label>
          <input
            placeholder={columnEdit}
            onChange={(e) => this.handleColumnText(e.target.value)}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    editColumn: (change) => dispatch({ type: "UPDATE_COLUMN", data: change }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditColumn);
