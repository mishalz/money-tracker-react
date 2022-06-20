import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const getYearValue = (year) => {
    setSelectedYear(year);
  };

  const filteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={selectedYear}
        onYearSelected={getYearValue}
      ></ExpensesFilter>
      <ExpensesChart dataPoints={filteredArray}/>
      <ExpensesList items={filteredArray} />
    </Card>
  );
}

export default Expenses;
