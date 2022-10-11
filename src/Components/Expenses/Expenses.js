import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSaveValue = (value) => {
    setFilteredYear(value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter selected={filteredYear} inputValue={onSaveValue} />
        <ExpensesList items={filteredExpenses}/>
      </div>
    </Card>
  );
}

export default Expenses;
