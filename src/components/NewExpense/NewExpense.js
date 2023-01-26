import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';

const NewExpense = (props) => {

  const [isEditting, setIsEditting] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };

  const startEditingHandler = () => {
    setIsEditting(true);
  }

  const stopEditingHandler = () => {
    setIsEditting(false);
  }

  return (
    <div className='new-expense'>
      {!isEditting && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditting && 
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={stopEditingHandler} 
        />
      }
    </div>
  );
};

export default NewExpense;
