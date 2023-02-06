import { useCallback, memo } from "react";
import { MemoizedSquare } from "./HoveredSquare";
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
    <div className="hovered-container">
      <h2>Hovered squares</h2>
      <div className="hovered-items">
        {[...hoveredSquares].map((item) => {
          const { itemRow, itemCol, itemNumber } = getPosition(item);
          return (
            <MemoizedSquare
              itemCol={itemCol}
              itemRow={itemRow}
              itemNumber={itemNumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export const MemoizedHoveredSquares = memo(HoveredSquares);
