const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

expenseForm.addEventListener('submit', addExpense);

function addExpense(event) {
    event.preventDefault();

    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && !isNaN(expenseAmount)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        expenseList.appendChild(listItem);

        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
}
