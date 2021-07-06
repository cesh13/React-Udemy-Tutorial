import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const [formVisiblity, setFormVisibility] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        changeFormVisibilityHandler();
        // console.log(expenseData);
    }

    const changeFormVisibilityHandler = () => {
        setFormVisibility(formVisibility =>{
            console.log(formVisiblity)
            return !formVisiblity;
        });
    }

    const visibleForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormCancel={changeFormVisibilityHandler}/>;
    const nonVisibleForm = <button onClick={changeFormVisibilityHandler}>New Expense</button>

    return <div className="new-expense">
        {formVisiblity ? visibleForm : nonVisibleForm}
        {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> */}
    </div>
}

export default NewExpense;