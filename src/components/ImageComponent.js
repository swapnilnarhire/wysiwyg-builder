import React, { useState } from "react";
import "../styles/Image.css";

const ImageComponent = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Reset error
    setError("");

    // Check if a file is selected
    if (!file) {
      return;
    }

    // Validate file type (e.g., image/png, image/jpeg)
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setError("Invalid file type. Please upload an image.");
      return;
    }

    // Optional: Validate file size (e.g., max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError("File size exceeds 5MB. Please upload a smaller image.");
      return;
    }

    // Read the file and set the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-component">
      {image ? (
        <img src={image} alt="Uploaded" className="uploaded-image" />
      ) : (
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
