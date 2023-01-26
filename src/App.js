import "./App.css";
import React, { useState, useRef } from "react";
import Grid from "./components/Grid";
import Select from "./components/Select";
import HoveredSquares from "./components/HoveredSquares";
export const AppContext = React.createContext();

function App() {
  const [gridSize, setGridSize] = useState("");
  const [hoveredSquares, setHoveredSquares] = useState([]);

  // const hoveredSquares = useRef([]);

  // const getGridSize = (data) => {
  //   setGridSize(data);
  // };

  console.log(hoveredSquares.current);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ gridSize, setGridSize, hoveredSquares, setHoveredSquares }}
      >
        <Select />
        <Grid cellWidth={30} cellHeight={30} borderColor={"black"} />
        <HoveredSquares />
      </AppContext.Provider>
    </div>
  );
}

export default App;
