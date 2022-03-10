import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ item }) => {
  return (
    <div>
      {item.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses</h2>
      ) : (
        <ul className="expenses-list">
          {item.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;
