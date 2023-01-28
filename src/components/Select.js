// import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import useFetch from "./useFetch";

const Select = () => {
  const url = `https://demo7919674.mockable.io/`;

  const res = useFetch(url, {});

  // const res = [
  //   { name: "Easy", field: 5 },
  //   { name: "Medium", field: 15 },
  //   { name: "Hard", field: 25 },
  // ];

  const contextHandler = useContext(AppContext);

  console.log(contextHandler);

  const changeHandler = (e) => {
    // setSelectedOption(e.target.value);
    contextHandler.setGridSize(e.target.value);
    // contextHandler.setHoveredSquares([]);
  };

  if (!res.response) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <select name="" id="" onChange={changeHandler} defaultValue={0}>
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

export default Select;
