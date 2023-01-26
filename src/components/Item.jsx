import React, { useContext } from "react";
import { AppContext } from "../App";
import "./Item.css";

const Item = ({ itemNumber }) => {
  const gridSizeContext = useContext(AppContext);

  const handleHover = (e) => {
    getPosition(e.target.getAttribute("data-id"));
  };

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

    return { itemRow, itemCol };
  }

  // console.log(itemNumber, size);

  return (
    <div
      className="grid-item"
      data-id={itemNumber}
      onMouseOverCapture={handleHover}
    ></div>
  );
};

export default Item;
