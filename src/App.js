import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import { MemoizedSelect } from "./components/Select";
import { MemoizedHoveredSquares } from "./components/HoveredSquares";

function App() {
  const [gridSize, setGridSize] = useState(0);
  const [hoveredSquares, setHoveredSquares] = useState([]);

  return (
    <div className="App">
      <div className="grid-container">
        <MemoizedSelect
          setGridSize={setGridSize}
          setHoveredSquares={setHoveredSquares}
        />
        <Grid
          gridSize={gridSize}
          setHoveredSquares={setHoveredSquares}
          hoveredSquares={hoveredSquares}
          cellWidth={30}
          cellHeight={30}
          borderColor={"black"}
        />
      </div>
      <MemoizedHoveredSquares
        hoveredSquares={hoveredSquares}
        gridSize={gridSize}
      />
    </div>
  );
}

export default App;
