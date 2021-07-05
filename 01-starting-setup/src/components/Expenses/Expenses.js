import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [enteredYear, setEnteredYear] = useState("2021");

  const filterChangeHandler = year => {
    setEnteredYear(year);
    console.log(year);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter yearSelected={enteredYear} onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
        
      </Card>
    </div>
  );
}

export default Expenses;
