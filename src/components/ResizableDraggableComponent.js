import React from "react";
import { Rnd } from "react-rnd";
import "../styles/ResizableDraggableComponent.css";

const ResizableDraggableComponent = ({ id, onResize, onStop, children }) => {
  const handleResizeStop = (e, direction, ref, delta, position) => {
    const { width, height } = ref.style;
    onResize(id, parseFloat(width), parseFloat(height));
    onStop(id, position.x, position.y);
  };

  const handleDragStop = (e, d) => {
    onStop(id, d.x, d.y);
  };

  return (
    <Rnd
      bounds="parent"
      onResizeStop={handleResizeStop}
      onDragStop={handleDragStop}
      minWidth={100}
      minHeight={50}
      default={{
        x: 0,
        y: 0,
        width: 200, // Adjust default width as needed
        height: "auto",
      }}
      style={{
        border: "1px dotted #000",
        padding: "10px",
        boxSizing: "border-box",
      }}
      resizeHandleStyles={{
        bottom: { borderBottom: "2px dotted #000" },
        bottomLeft: {
          borderBottom: "2px dotted #000",
          borderLeft: "2px dotted #000",
        },
        bottomRight: {
          borderBottom: "2px dotted #000",
          borderRight: "2px dotted #000",
        },
        left: { borderLeft: "2px dotted #000" },
        right: { borderRight: "2px dotted #000" },
        top: { borderTop: "2px dotted #000" },
        topLeft: {
          borderTop: "2px dotted #000",
          borderLeft: "2px dotted #000",
        },
        topRight: {
          borderTop: "2px dotted #000",
          borderRight: "2px dotted #000",
        },
      }}
    >
      {children}
    </Rnd>
  );
};

export default ResizableDraggableComponent;
