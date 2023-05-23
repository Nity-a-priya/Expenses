import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData };
        //console.log(expenseData);
        onAddExpense(expenseData);
    };

    const [isFormShown, setFormDisplay] = useState(false);

    function displayForm (){
        setFormDisplay(true);
      }
      function hideForm (){
        setFormDisplay(false);
      }
    

   return ( 
   <div className = "new-expense">
       {isFormShown == false && <button onClick={displayForm}>Add Expense</button>}
       {isFormShown && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} click = {hideForm}/>}
    </div>
   );
};

export default NewExpense;