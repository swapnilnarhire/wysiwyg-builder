import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Toolbar from "./components/Toolbar";
import PreviewButton from "./components/PreviewButton";
import "./styles/App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Toolbar />
        <PreviewButton />
      </div>
    </DndProvider>
  );
}

export default App;
