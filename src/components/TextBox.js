import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/TextBox.css";

const TextBox = ({ isPreview, content, onChange }) => {
  const [value, setValue] = useState(content || "");

  const handleChange = (value) => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  if (isPreview) {
    return (
      <div className="text-box">
        <div
          className="quill-preview"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    );
  }

  return (
    <div className="text-box">
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextBox;
