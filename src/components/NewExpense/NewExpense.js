import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const saveExpenseHandler =(enteredExpenseData) =>{
            const expenseData= {
                ...enteredExpenseData,
                id:Math.random().toString()
            };
            props.onAddExpense(expenseData);
            setisEditing(false)

    };
    const [isEditing,setisEditing]=useState(false)

    const startEditingHandler=()=>{
      setisEditing(true);
    }
    const stopEditingHandler=()=>{
      setisEditing(false);
    }

    return (
      <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} />}
      </div>
    );
};

export default NewExpense;
