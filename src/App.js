import React,{useState} from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// TODO: типа бд
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenseData, setExpenseData] = useState(expenses);

  function addExpenseHundler(expense) {
    setExpenseData([
      ...expenseData, // данные, которые были в бд 
      expense //TODO: данные которые мы добавляем в бд
    ])
  }

  return (
    <div>
      {/* TODO: в качестве пропы мы передаем функцию, которая добавляет введенные данные в бд */}
      <NewExpense onAddExpense={addExpenseHundler} />
      {/* TODO: expenseData - данные бд (т.е отправляем данные на рендер) */}
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;
