import React, { useState, useEffect } from "react";
import "../styles/ButtonComponent.css";

const ButtonComponent = ({ isPreview, content, onChange }) => {
  const [text, setText] = useState(content || "Button");

  useEffect(() => {
    if (!isPreview) {
      setText(content);
    }
  }, [content, isPreview]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (!isPreview) {
      onChange(newText);
    }
  };

  return (
    <div className="button-container">
      {isPreview ? (
        <button className="button-preview">{text}</button>
      ) : (
        <div>
          <button className="button-edit">{text}</button>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="button-input"
          />
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
