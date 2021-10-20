import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesRender from './ExpensesRender';
import Card from '../../UI/Card';

function Expenses(props) {

    const [ChoosedYear, setChoosedYear] = useState('2021')

    function changeYear(ChoosedYear){
        setChoosedYear(ChoosedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === ChoosedYear
    })

    return (
        <Card className='expenses' >
            <ExpenseFilter ChangeYear={changeYear} />
            <ExpensesRender expenses={filteredExpenses} />
        </Card>
    )
}
    
export default Expenses;