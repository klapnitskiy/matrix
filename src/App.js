import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import Select from "./components/Select";
import HoveredSquares from "./components/HoveredSquares";
export const AppContext = React.createContext();

function App() {
  const [gridSize, setGridSize] = useState("");
  const [hoveredSquares, setHoveredSquares] = useState([]);

  console.log(hoveredSquares.current);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ gridSize, setGridSize, hoveredSquares, setHoveredSquares }}
      >
        <div className="grid-container">
          <Select />
          <Grid cellWidth={30} cellHeight={30} borderColor={"black"} />
        </div>
        <HoveredSquares />
      </AppContext.Provider>
    </div>
  );
}

export default App;
