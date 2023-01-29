import useFetch from "./useFetch";
import { memo } from "react";

const Select = ({ setGridSize, setHoveredSquares }) => {
  const url = `https://demo7919674.mockable.io/`;

  const res = useFetch(url, {});

  const changeHandler = (e) => {
    setGridSize(Number(e.target.value));
    setHoveredSquares([]);
  };

  if (!res.response) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <select
        style={{
          maxWidth: 100,
        }}
        name=""
        id=""
        onChange={changeHandler}
        defaultValue={0}
      >
        <option value={0} hidden disabled>
          Pick mode
        </option>
        {res.response.map((option, id) => {
          return (
            <option key={id} value={option.field}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export const MemoizedSelect = memo(Select);
