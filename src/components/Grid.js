import { useContext } from "react";
import { AppContext } from "../App";
import "./Grid.css";
import Item from "./Item";

const Grid = (props) => {
  const { cellWidth, cellHeight, borderColor } = props;

  const { hoveredSquares, setHoveredSquares, gridSize } =
    useContext(AppContext);

  const handleHover = (e) => {
    if (!e.target.classList.contains("grid-item")) return;

    const currentItem = e.target;

    const currItemId = Number(e.target.getAttribute("data-id"));
    console.log(currItemId);

    const currPairs = getPosition(currItemId);

    const addItem = () => {
      currentItem.classList.add("grid-item__hovered");
      console.log(currPairs);
      setHoveredSquares([...hoveredSquares, currPairs]);
    };

    const deleteItem = (id) => {
      const updatedItems = hoveredSquares.filter(
        (item) => item.itemNumber !== id
      );
      console.log("here");
      currentItem.classList.toggle("grid-item__hovered");
      setHoveredSquares(updatedItems);
    };

    hoveredSquares.find((pair) => pair.itemNumber === currPairs.itemNumber)
      ? deleteItem(currItemId)
      : addItem();
  };

  function getPosition(itemNumber) {
    const itemRow =
      itemNumber % gridSize === 0
        ? Math.floor(itemNumber / gridSize)
        : Math.floor(itemNumber / gridSize + 1);

    const itemCol = Math.floor(
      itemNumber % gridSize === 0 ? gridSize : itemNumber % gridSize
    );

    return { itemRow, itemCol, itemNumber };
  }

  if (!gridSize) return;

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${cellHeight}px)`,
        "--border-color": borderColor,
      }}
      onMouseOverCapture={handleHover}
    >
      {Array.from({ length: gridSize ** 2 }, (_, index) => (
        <Item key={index} itemNumber={index + 1} />
      ))}
    </div>
  );
};

export default Grid;
