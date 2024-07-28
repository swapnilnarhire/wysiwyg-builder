import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import "../styles/DraggableComponent.css";

const DraggableComponent = ({ type }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COMPONENT,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="draggable-component"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {type}
    </div>
  );
};

export default DraggableComponent;
