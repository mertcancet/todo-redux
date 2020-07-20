import React from "react";
import "./editColumn.css"
class EditColumn extends React.Component {
  render() {
    const { id, columnText, index } = this.props;
    return (
      <p >
        id:{id} \\n columnText:{columnText} \\n index:{index}
      </p>
    );
  }
}

export default EditColumn;
