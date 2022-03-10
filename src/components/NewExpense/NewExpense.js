import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const [open, setOpen] = useState(false);
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor((Math.random() * 10).toString()),
    };

    onAddExpense(expenseData);
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(false);
  };

  return (
    <div className="new-expense">
      {!open === true ? (
        <div>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={savedExpenseDataHandler}
          onCancel={openHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
