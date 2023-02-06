import "./Grid.css";
import { MemoizedItem } from "./Item";

const Grid = ({
  hoveredSquares,
  setHoveredSquares,
  gridSize,
  cellWidth,
  cellHeight,
  borderColor,
}) => {
  const handleHover = (e) => {
    if (!e.target.classList.contains("grid-item")) return;

    const currItemId = Number(e.target.getAttribute("data-id"));

    const addItem = () => {
      setHoveredSquares([...hoveredSquares, currItemId]);
    };

    const deleteItem = (id) => {
      const updatedItems = hoveredSquares.filter((item) => item !== id);
      setHoveredSquares(updatedItems);
    };

    hoveredSquares.find((itemId) => itemId === currItemId)
      ? deleteItem(currItemId)
      : addItem();
  };

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
      {Array.from({ length: gridSize ** 2 }, (_, index) => {
        const isHovered = hoveredSquares.find((item) => item === index + 1);
        return (
          <MemoizedItem
            key={index}
            itemNumber={index + 1}
            isHovered={isHovered}
          />
        );
      })}
    </div>
  );
};

export default Grid;
