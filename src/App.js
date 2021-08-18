import React,{useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyText = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "239.56",
    date: new Date(),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: "339.56",
    date: new Date(2021, 5, 1),
  },
  {
    id: "e3",
    title: "Home Insurance",
    amount: "639.56",
    date: new Date(2021, 4, 21),
  },
  {
    id: "e4",
    title: "Life Insurance",
    amount: "219.56",
    date: new Date(2021, 2, 21),
  },
];
const App = () => {
  
  const [expenses,setExpenses]=useState(dummyText);

  const addExpenseHandler = expense =>{
    setExpenses((prevExpense)=>{
      return [expense,...prevExpense]
    })
  }
  return (
    <div>
      <h1>
        <center>Expense Tracker</center>
      </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
