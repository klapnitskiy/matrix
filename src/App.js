import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import Select from "./components/Select";
export const AppContext = React.createContext();

function App() {
  const [gridSize, setGridSize] = useState("");

  // const getGridSize = (data) => {
  //   setGridSize(data);
  // };

  return (
    <div className="App">
      <AppContext.Provider value={{ gridSize, setGridSize }}>
        <Select />
        <Grid cellWidth={15} cellHeight={15} borderColor={"black"} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
