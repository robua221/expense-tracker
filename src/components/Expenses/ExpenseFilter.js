import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const dropdownHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select Year</label>
        <select value={selected} onChange={dropdownHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
