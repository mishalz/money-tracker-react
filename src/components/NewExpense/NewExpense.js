import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const newExpenseObjectHandler = (newExpenseObject) => {
    const expense = { ...newExpenseObject, id: Math.random().toString() };
    props.onNewExpense(expense);
    setFormVisibility(false);
  };

  const hideExpenseForm = () => {
    setFormVisibility(false);
  };

  const showExpenseForm = () => {
    setFormVisibility(true);
  };

  if (formVisibility) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSubmittingData={newExpenseObjectHandler}
          onChangingVisibility={hideExpenseForm}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={showExpenseForm}>Add Expense</button>
    </div>
  );
};

export default NewExpense;
