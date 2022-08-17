let balance = document.getElementById("balance");
let income = document.getElementById("income");
let incomeBtn = document.getElementById("income__btn");
let expense = document.getElementById("expense");
let expenseBtn = document.getElementById("expense__btn");
let history = document.getElementById("history");
let floatBtn = document.getElementById("float-btn");
let main = document.getElementById("main");
let exitBtn = document.getElementById("exit-btn");
let toastIncome = document.getElementById("toast-income");
let toastExpense = document.getElementById("toast-expense");
let historySpan = document.getElementById("history-span");
let incomeVal = income.value
let expenseVal = expense.value
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;



floatBtn.addEventListener('click', () => {
    main.classList.toggle('d-none');
    main.classList.toggle('active'); 
})

exitBtn.addEventListener("click", function() {
    main.classList.toggle('active');
    main.classList.toggle('d-none');
})


incomeBtn.addEventListener("click", function () {
    if (income.value === "") {
        income.style.borderColor = "red";
    } else {
        income.style.borderColor = "black";
        let incomeVal = income.value
        balance.innerText = Number(balance.innerText) + Number(incomeVal);
        let para = document.createElement("p")
        para.style.color = "green";
        historySpan.innerText = "";
        history.append(para)
        para.textContent = `Income: ₦${incomeVal} / ${dateTime}`
        income.value = ""; 
        const toast = new bootstrap.Toast(toastIncome)
        toast.show()
    }
})

expenseBtn.addEventListener("click", function (){
    if (expense.value === "") {
        expense.style.borderColor = "red";
    } else {
        expense.style.borderColor = "black";
        let expenseVal = expense.value
        balance.innerText = Number(balance.innerText) - Number(expenseVal);
        let expensePara = document.createElement("p")
        expensePara.style.color = "red";
        history.appendChild(expensePara)
        expensePara.textContent = `Expense: ₦${expenseVal} / ${dateTime}`
        expense.value = "";
        const toast = new bootstrap.Toast(toastExpense)
        toast.show()
    }
})




