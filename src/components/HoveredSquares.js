import { useContext } from "react";
import { AppContext } from "../App";

const HoveredSquares = () => {
  const contextCoords = useContext(AppContext);
  console.log(contextCoords.hoveredSquares);
  return (
    <div>
      {contextCoords.hoveredSquares.map((item) => (
        <div key={item.itemNumber}>
          <strong>square: {item.itemNumber}</strong> item row:{" "}
          <strong>{item.itemRow}</strong> item col:{" "}
          <strong>{item.itemCol}</strong>
        </div>
      ))}
    </div>
  );
};

export default HoveredSquares;
