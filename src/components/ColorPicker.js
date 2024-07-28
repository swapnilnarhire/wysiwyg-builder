// src/components/ColorPicker.js
import React from "react";
import { SketchPicker } from "react-color";
import "../styles/ColorPicker.css";

const ColorPicker = ({ color, onChange }) => {
  return (
    <div className="color-picker">
      <SketchPicker color={color} onChangeComplete={onChange} />
    </div>
  );
};

export default ColorPicker;
