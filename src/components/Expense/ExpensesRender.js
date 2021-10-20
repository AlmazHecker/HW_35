import ExpenseItem from "./ExpenseItem";

function ExpensesRender(props){

 
    return(
        <div>
        {
            props.expenses.length === 0 ? <h2 style={{textAlign: 'center'}}>error</h2> : props.expenses.map((el, id) => {
                return <ExpenseItem
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={id}
                />
            })
        }
    </div>
    )
}

export default ExpensesRender;