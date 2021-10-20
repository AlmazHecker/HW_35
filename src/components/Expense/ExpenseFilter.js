

function ExpenseFilter(props){
    
    function setYear(e){
        props.ChangeYear(e.target.value)
    }
    
    return(
        <div>
            <select onChange={(e) => {setYear(e)}}>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;