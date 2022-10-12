import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const displayFormTrue = () => {
    setDisplayForm(true);
  }
  const displayFormFalse = () => {
    setDisplayForm(false);
  }

  return (
    <div className="new-expense">
      {!displayForm && <button onClick={displayFormTrue}>Add Expenses</button>}
      {displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChange={displayFormFalse}/>}
    </div>
  );
};

export default NewExpense;
