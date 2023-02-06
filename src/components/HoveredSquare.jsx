import { memo } from "react";

const HoveredSquare = ({ itemNumber, itemCol, itemRow }) => {
  return (
    <div className="hovered-item" key={itemNumber}>
      <strong>square: {itemNumber}</strong> item row: <strong>{itemRow}</strong>{" "}
      item col: <strong>{itemCol}</strong>
    </div>
  );
};

export const MemoizedSquare = memo(HoveredSquare);
