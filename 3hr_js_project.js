// Get references to elements
let expenseform=document.getElementById('expense_form');
let amount=document.getElementById('expense_amount');
let description=document.getElementById('description');
let category=document.getElementById('category');
let expenseslist=document.getElementById('expenses_list');
expenseform.addEventListener('submit', addExpense);
function addExpense(e){
    e.preventDefault();
        if(amount.value==="" || description.value==="" || category.value===""){
        alert('Please enter all fields.');
    } 
    else{
        let expense={
            amount:amount.value,
            description:description.value,
            category:category.value,
        };
        let storedExpenses=JSON.parse(localStorage.getItem('expenses')) || [];
        storedExpenses.push(expense);
        localStorage.setItem('expenses',JSON.stringify(storedExpenses));
        addExpenseToUI(expense);
        amount.value='';
        description.value='';
        category.value='';
    }
}
function addExpenseToUI(expense){
    let li=document.createElement('li');
    li.className='list-group-item';
    li.textContent=`${expense.amount}: ${expense.description}: ${expense.category}`;
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.textContent='X';
    let editBtn=document.createElement('button');
    editBtn.className='btn btn-primary btn-sm float-right edit';
    editBtn.textContent='EDIT';
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    expenseslist.appendChild(li);
}
expenseslist.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete this expense?')){
            let li=e.target.parentElement;
            expenseslist.removeChild(li);            
            let expenseText=li.textContent.trim();            
            let storedExpenses=JSON.parse(localStorage.getItem('expenses'));
            let updatedExpenses=storedExpenses.filter(expense=>expense!==expenseText);
            localStorage.setItem('expenses',JSON.stringify(updatedExpenses));
        }
    } 
    else if(e.target.classList.contains('edit')){
        let li=e.target.parentElement;
        let expenseText=li.textContent.trim();        
        amount.value=amountText;
        storedExpenses=JSON.parse(localStorage.getItem('expenses'));
        let updatedExpenses=storedExpenses.filter(expense=>expense!==expenseText);
        localStorage.setItem('expenses',JSON.stringify(updatedExpenses));
        // Remove the expense from UI
        expenseslist.removeChild(li);
    }
});
