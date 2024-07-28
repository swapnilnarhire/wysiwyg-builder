import React from "react";
import DraggableComponent from "./DraggableComponent";
import "../styles/Toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <DraggableComponent type="TextBox" />
      <DraggableComponent type="Image" />
      <DraggableComponent type="Button" />
    </div>
  );
};

export default Toolbar;
