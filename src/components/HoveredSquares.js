import { useCallback, memo } from "react";
import "./HoveredSquares.css";

const HoveredSquares = ({ hoveredSquares, gridSize }) => {
  const getPosition = useCallback(
    (itemNumber) => {
      const itemRow =
        itemNumber % gridSize === 0
          ? Math.floor(itemNumber / gridSize)
          : Math.floor(itemNumber / gridSize + 1);

      const itemCol = Math.floor(
        itemNumber % gridSize === 0 ? gridSize : itemNumber % gridSize
      );

      return { itemRow, itemCol, itemNumber };
    },
    [gridSize]
  );

  return (
    <div
      style={{ height: 300, overflow: "auto" }}
      className="hovered-container"
    >
      <h2>Hovered squares</h2>
      <div className="hovered-items">
        {[...hoveredSquares].map((item) => {
          const { itemRow, itemCol, itemNumber } = getPosition(item);
          return (
            <div className="hovered-item" key={itemNumber}>
              <strong>square: {itemNumber}</strong> item row:{" "}
              <strong>{itemRow}</strong> item col: <strong>{itemCol}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MemoizedHoveredSquares = memo(HoveredSquares);
