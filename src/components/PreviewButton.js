import React, { useState } from "react";
import Canvas from "./Canvas";
import "../styles/PreviewButton.css";

const PreviewButton = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleToggle = () => {
    setIsPreview(!isPreview);
  };

  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className="preview-button">
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <button onClick={handleToggle}>{isPreview ? "Edit" : "Preview"}</button>{" "}
      <button onClick={handleColorPickerToggle}>
        {showColorPicker ? "Changes Done" : "Change Canvas Color"}
      </button>
      </div>
      <Canvas isPreview={isPreview} showColorPicker={showColorPicker} />
    </div>
  );
};

export default PreviewButton;
