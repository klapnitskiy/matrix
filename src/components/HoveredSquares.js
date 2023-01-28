import { useContext } from "react";
import { AppContext } from "../App";
import "./HoveredSquares.css";

const HoveredSquares = () => {
  const contextCoords = useContext(AppContext);
  console.log(contextCoords.hoveredSquares);
  return (
    <div className="hovered-container">
      <h2>Hovered squares</h2>
      <div className="hovered-items">
        {contextCoords.hoveredSquares.map((item) => (
          <div className="hovered-item" key={item.itemNumber}>
            <strong>square: {item.itemNumber}</strong> item row:{" "}
            <strong>{item.itemRow}</strong> item col:{" "}
            <strong>{item.itemCol}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoveredSquares;
