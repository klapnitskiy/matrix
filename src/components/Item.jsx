import "./Item.css";
import { memo } from "react";
import cx from "classnames";

const Item = ({ itemNumber, isHovered }) => {
  return (
    <div
      className={cx("grid-item", { "grid-item__hovered": isHovered })}
      data-id={itemNumber}
    ></div>
  );
};

export const MemoizedItem = memo(Item);
