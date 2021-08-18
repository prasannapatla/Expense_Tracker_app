import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  // 1st methos
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //2nd method
  // const [userInput,enteredUserInput] = useState({
  //   setEnteredTitle : '',
  //   setEnteredAmount : '',
  //   setEnteredDate : ''
  // })


  const titleChangeHandler = (event) =>{
    //1st method
    setEnteredTitle(event.target.value);

    //2nd method
    // enteredUserInput({
    //   setEnteredTitle: event.targe.value,
    //   setEnteredAmount: "",
    //   setEnteredDate: "",
    // });

    //---3rd method--\\
    // enteredUserInput((prevState) =>{
    //   return { ...prevState ,setEnteredTitle:event.target.value};
    // });
  }

  const amountChangeHandler = (event) => {

    //1st method
    setEnteredAmount(event.target.value);

    //2nd method
    // enteredUserInput({
    //   setEnteredTitle: "",
    //   setEnteredAmount: event.targe.value,
    //   setEnteredDate: "",
    // });
  };

  const dateChangeHandler = (event) => {

    //1st method
    setEnteredDate(event.target.value);

    //2nd method
    // enteredUserInput({
    //   setEnteredTitle: "",
    //   setEnteredAmount: "",
    //   setEnteredDate: event.targe.value,
    // });
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const ExpenseData = {
      title :enteredTitle ,
      amount : enteredAmount ,
      date : new Date(enteredDate)
    };
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("") ;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
