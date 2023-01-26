import { useState } from "react";
import { useContext, useRef } from "react";
import { AppContext } from "../App";
import "./Grid.css";
import Item from "./Item";

const Grid = (props) => {
  const { cellWidth, cellHeight, borderColor } = props;

  const gridSizeContext = useContext(AppContext);
  // const [pairs, setPairs] = useState([]);
  // gridSizeContext.hoveredSquares = pairs;

  // let refs = useRef([]);

  const handleHover = (e) => {
    if (!e.target.classList.contains("grid-item")) return;

    const currentItem = e.target;

    const currItemId = Number(e.target.getAttribute("data-id"));
    console.log(currItemId);

    const currPairs = getPosition(currItemId);

    const addItem = (e) => {
      // gridSizeContext.hoveredSquares.push(currPairs);
      currentItem.classList.add("grid-item__hovered");

      // setPairs([...pairs, currPairs]);
      // refs = [...refs, ref];
      console.log(currPairs);
      gridSizeContext.setHoveredSquares([
        ...gridSizeContext.hoveredSquares,
        currPairs,
      ]);
    };

    const deleteItem = (id) => {
      const updatedItems = gridSizeContext.hoveredSquares.filter(
        (item) => item.itemNumber !== id
      );
      // setPairs(updatedItems);
      console.log("here");
      currentItem.classList.toggle("grid-item__hovered");
      gridSizeContext.setHoveredSquares(updatedItems);
    };

    // console.log(pairs);

    gridSizeContext.hoveredSquares.find(
      (pair) => pair.itemNumber === currPairs.itemNumber
    )
      ? deleteItem(currItemId)
      : addItem();
  };

  // const handleHover = (e) => {
  //   getPosition(e.target.getAttribute("data-id"));
  // };

  function getPosition(itemNumber) {
    const itemRow =
      itemNumber % gridSizeContext.gridSize === 0
        ? Math.floor(itemNumber / gridSizeContext.gridSize)
        : Math.floor(itemNumber / gridSizeContext.gridSize + 1);
    const itemCol = Math.floor(
      itemNumber % gridSizeContext.gridSize === 0
        ? gridSizeContext.gridSize
        : itemNumber % gridSizeContext.gridSize
    );

    return { itemRow, itemCol, itemNumber };
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridSizeContext.gridSize}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${gridSizeContext.gridSize}, ${cellHeight}px)`,
        "--border-color": borderColor,
      }}
      // ref={gridSizeContext.hoveredSquares}
      onMouseOverCapture={handleHover}
    >
      {Array.from({ length: gridSizeContext.gridSize ** 2 }, (_, index) => (
        <Item key={index} itemNumber={index + 1} />
      ))}
    </div>
  );
};

export default Grid;
