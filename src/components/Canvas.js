// src/components/Canvas.js
import React, { useState, useRef, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import ResizableDraggableComponent from "./ResizableDraggableComponent";
import TextBox from "./TextBox";
import ImageComponent from "./ImageComponent";
import ButtonComponent from "./ButtonComponent";
import ColorPicker from "./ColorPicker";
import "../styles/Canvas.css";

const Canvas = ({ isPreview, showColorPicker }) => {
  const [components, setComponents] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#cccccc");
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasWidth(canvasRef.current.clientWidth);
      setCanvasHeight(canvasRef.current.clientHeight);
    }
  }, []);

  const [, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
    drop: (item) => addComponent(item.type),
  });

  const addComponent = (type) => {
    const id = new Date().getTime();
    let component = {
      id,
      type,
      x: 0,
      y: 0,
      width: 200,
      height: 50,
      content: "",
    };
    if (type === "TextBox") {
      component.width = 200;
      component.height = 100;
    }
    if (type === "Image") {
      component.width = 150;
      component.height = 150;
    }
    if (type === "Button") {
      component.width = 100;
      component.height = 50;
    }
    setComponents((prevComponents) => [...prevComponents, component]);
  };

  const updateComponentPosition = (id, x, y) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, x, y } : component
      )
    );
  };

  const updateComponentSize = (id, width, height) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, width, height } : component
      )
    );
  };

  const updateComponentContent = (id, content) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, content } : component
      )
    );
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const renderComponent = (component) => {
    const { id, type, content } = component;
    const componentStyle = { width: "100%", height: "100%" };

    let Component;
    switch (type) {
      case "TextBox":
        Component = (
          <TextBox
            isPreview={isPreview}
            content={content}
            onChange={(content) => updateComponentContent(id, content)}
          />
        );
        break;
      case "Image":
        Component = <ImageComponent />;
        break;
      case "Button":
        Component = (
          <ButtonComponent
            isPreview={isPreview}
            content={content}
            onChange={(content) => updateComponentContent(id, content)}
          />
        );
        break;
      default:
        return null;
    }

    return (
      <ResizableDraggableComponent
        key={id}
        id={id}
        onResize={updateComponentSize}
        onStop={updateComponentPosition}
        containerWidth={canvasWidth}
        containerHeight={canvasHeight}
      >
        <div style={componentStyle}>{Component}</div>
      </ResizableDraggableComponent>
    );
  };

  return (
    <div
      ref={(node) => {
        canvasRef.current = node;
        drop(node);
      }}
      className="canvas"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="canvas-controls">
        {showColorPicker && (
          <ColorPicker color={backgroundColor} onChange={handleColorChange} />
        )}
      </div>
      {components.map(renderComponent)}
    </div>
  );
};

export default Canvas;
