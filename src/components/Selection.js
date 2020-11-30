import React from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const { applyColor } = props;
  const [selectionStyle, updateSelectionStyle] = React.useState({
    background: ""
  });
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
