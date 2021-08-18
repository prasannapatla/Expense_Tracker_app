import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };
   
  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}/>
        
      </Card>
    </div>
  );
};

export default Expenses;
