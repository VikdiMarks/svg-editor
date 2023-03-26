import React from "react";

function ToolsButton(props) {
  return (
    <button className="tools-button">
      <props.name />
    </button>
  );
}

export default ToolsButton;
