let balance = document.getElementById("balance");
let income = document.getElementById("income");
let incomeBtn = document.getElementById("income__btn");
let expense = document.getElementById("expense");
let expenseBtn = document.getElementById("expense__btn");
let floatBtn = document.getElementById("float-btn");
let main = document.getElementById("main");
let exitBtn = document.getElementById("exit-btn");
let toastIncome = document.getElementById("toast-income");
let toastExpense = document.getElementById("toast-expense");
let historySpan = document.getElementById("history-span");
let historyContainer = document.getElementById("historyContainer");
let emptyHistory = document.getElementById("empty-history");
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
        income.classList.add("border-danger")
    } else {
        income.classList.add("border-dark")
        let incomeVal = income.value
        balance.innerText = Number(balance.innerText) + Number(incomeVal);
        let history = document.createElement("div")
        history.classList.add("history")
        let listItem = document.createElement("div")
        let listItemTwo = document.createElement("div")
        listItem.style.color = "green";
        listItemTwo.style.color = "green";
        emptyHistory.classList.add("d-none")
        historyContainer.append(history)
        history.append(listItem)
        history.append(listItemTwo)
        listItem.textContent = `Income: ₦${incomeVal}`
        listItemTwo.textContent = `${dateTime}`
        income.value = ""; 
        const toast = new bootstrap.Toast(toastIncome)
        toast.show()
    }
})

expenseBtn.addEventListener("click", function (){
    if (expense.value === "") {
        expense.classList.add("border-danger")
    } else {
        expense.classList.add("border-dark")
        let expenseVal = expense.value
        balance.innerText = Number(balance.innerText) - Number(expenseVal);
        let history = document.createElement("div")
        history.classList.add("history")
        let listItem = document.createElement("div")
        let listItemTwo = document.createElement("div")
        listItem.style.color = "red";
        listItemTwo.style.color = "red";
        emptyHistory.classList.add("d-none")
        historyContainer.append(history)
        history.append(listItem)
        history.append(listItemTwo)
        listItem.textContent = `Income: ₦${expenseVal}`
        listItemTwo.textContent = `${dateTime}`
        expense.value = "";
        const toast = new bootstrap.Toast(toastExpense)
        toast.show()
    }
})




