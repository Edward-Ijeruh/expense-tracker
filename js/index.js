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
let cTime = current.getHours() + ":" + current.getMinutes();
let dateTime = cDate + ' ' + cTime;
let img = `<img src="../images/plus.png">`;
let imgTwo = `<img src = "../images/remove.png">`;


//FLOAT BUTTON

floatBtn.addEventListener('click', () => {
    main.classList.toggle('d-none');
    main.classList.toggle('active'); 
})

//EXIT BUTTON

exitBtn.addEventListener("click", function() {
    main.classList.toggle('active');
    main.classList.toggle('d-none');
})

//LOCAL STORAGE FXNS

const userData = [];
const userExpenseData = [];

function addIncome(balanceAmt, incomeAmt, incomeTime) {
    userData.push({
        Current_Balance: balanceAmt,
        Stated_Income: incomeAmt,
        Stated_Income_Time: incomeTime
    })
    localStorage.setItem("userData", JSON.stringify(userData))

    return {balanceAmt, incomeAmt, incomeTime}
} 

function addExpense(balanceAmt, expenseAmt, expenseTime) {
    userExpenseData.push({
        Current_Balance: balanceAmt,
        Stated_Expense: expenseAmt,
        Stated_Expense_Time: expenseTime
    })
    localStorage.setItem("userExpenseData", JSON.stringify(userExpenseData))

    return {balanceAmt, expenseAmt, expenseTime}
} 


// INCOME BUTTON FUNCTION

incomeBtn.addEventListener("click", function () {
    if (income.value === "") {
        income.classList.toggle("border-danger")
    } else {
        income.classList.remove("border-danger")
        let incomeVal = income.value
        balance.innerText = Number(balance.innerText) + Number(incomeVal);
        let history = document.createElement("div")
        history.classList.add("history")
        let listItem = document.createElement("div")
        let listItemTwo = document.createElement("div")
        listItem.style.color = "black";
        listItemTwo.style.color = "black";
        emptyHistory.classList.add("d-none")
        historyContainer.append(history)
        history.append(listItem)
        history.append(listItemTwo)
        listItem.innerHTML = `${img} ₦${incomeVal}`
        listItemTwo.textContent = `${dateTime}`
        income.value = "";
        addIncome( balance.innerText, listItem.innerHTML, listItemTwo.textContent);
        // let userData = {
        //     balanceAmt: balance.innerText,
        //     incomeAmt: listItem.innerHTML,
        //     incomeTime: listItemTwo.textContent
        // };
        // userData = JSON.stringify(userData)
        // localStorage.setItem("localst",userData)
        const toast = new bootstrap.Toast(toastIncome)
        toast.show()
    }
})

//EXPENSE BUTTON FUNCTION

expenseBtn.addEventListener("click", function (){
    if (expense.value === "") {
        expense.classList.toggle("border-danger")
    } else {
        expense.classList.remove("border-danger");
        let expenseVal = expense.value
        balance.innerText = Number(balance.innerText) - Number(expenseVal);
        let history = document.createElement("div")
        history.classList.add("history")
        let listItem = document.createElement("div")
        let listItemTwo = document.createElement("div")
        listItem.style.color = "black";
        listItemTwo.style.color = "black";
        emptyHistory.classList.add("d-none")
        historyContainer.append(history)
        history.append(listItem)
        history.append(listItemTwo)
        listItem.innerHTML = `${imgTwo} ₦${expenseVal}`
        listItemTwo.textContent = `${dateTime}`
        expense.value = "";
        addExpense( balance.innerText, listItem.innerHTML, listItemTwo.textContent);
        // let userDataTwo = {
        //     balanceAmt: balance.innerText,
        //     expenseAmt: listItem.innerHTML,
        //     expenseTime: listItemTwo.textContent
        // };
        // userDataTwo = JSON.stringify(userDataTwo)
        // localStorage.setItem("localstTwo",userDataTwo)
        const toast = new bootstrap.Toast(toastExpense)
        toast.show()
    }
})




