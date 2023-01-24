import { useContext } from "react";
import { AppContext } from "../App";
import "./Grid.css";

const Item = ({ itemNumber }) => {
  const gridSizeContext = useContext(AppContext);

  const itemRow =
    itemNumber % gridSizeContext.gridSize === 0
      ? Math.floor(itemNumber / gridSizeContext.gridSize)
      : Math.floor(itemNumber / gridSizeContext.gridSize + 1);
  const itemCol =
    itemNumber % gridSizeContext.gridSize === 0
      ? gridSizeContext.gridSize
      : itemNumber % gridSizeContext.gridSize;
  // console.log(itemNumber, size);

  return <div data-id={itemNumber} data-row={itemRow} data-col={itemCol}></div>;
};

const Grid = (props) => {
  const { cellWidth, cellHeight, borderColor } = props;

  const gridSizeContext = useContext(AppContext);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridSizeContext.gridSize}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${gridSizeContext.gridSize}, ${cellHeight}px)`,
        "--border-color": borderColor,
      }}
    >
      {Array.from({ length: gridSizeContext.gridSize ** 2 }, (_, index) => (
        <Item key={index} itemNumber={index + 1} />
      ))}
    </div>
  );
};

export default Grid;
