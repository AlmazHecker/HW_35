import React from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//it's not a wrapper component
const NewExpense = (props) => {
    //lifting up method

    //TODO: функция, переданная как, пропа в компонент ExpenseForm
    function saveExpenseDataHundler(data) {
        let expenseData = {
            ...data,
            id: Math.random().toString(),
        }

        // TODO: onAddExpense - функция, переданная в качестве пропы
        // т.е мы передаем данные формы
        props.onAddExpense(expenseData);
    }



    return <div className='new-expense'>
        {/* TODO: ExpenseForm возвращает данные и саму форму */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;