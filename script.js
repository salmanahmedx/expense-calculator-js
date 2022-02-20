//** Income and Expense **//

const incomeInput = document.querySelector(".income-input")
const foodExpense = document.querySelector(".food")
const rentExpense = document.querySelector(".rent")
const clothesExpense = document.querySelector(".clothes")

//** Updated Numbers **//

const totalExpenseText = document.querySelector(".total-exp")
const balance = document.querySelector(".new-balance")
const savingAmount = document.querySelector(".saving-amount")
const remainingBalanceText = document.querySelector(".remaining-balance")

//** Income and Expense **//

const saveInput = document.querySelector('input[type="range"]');
const saveText = document.querySelector(".save-text")


//** Buttons **//

const calculateBtn = document.querySelector(".calculate")
const saveBtn = document.querySelector(".save")

//** Error Handling **//

let inputField = document.querySelectorAll(".input")
let invalidChars = ["-", "e"]
inputField.forEach(function (input) {
    input.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
            alert("Please use number values! 🥱")
        }
    })
})

//** Function and Event Listeners **//

////calculating income and totalExpense
function calculateSpendings(updatedPercent) {
    let incomeValue = Number(incomeInput.value)
    let foodExpenseValue = Number(foodExpense.value)
    let rentExpenseValue = Number(rentExpense.value)
    let clothesExpenseValue = Number(clothesExpense.value)

    //calculations
    let totalExpense = (foodExpenseValue + rentExpenseValue + clothesExpenseValue).toFixed(2);
    let newBalance = (incomeValue - totalExpense).toFixed(2);


    //innerText modify
    totalExpenseText.textContent = `Total Expense: ${totalExpense}`;
    balance.textContent = `Balance: ${newBalance}`;

    //error message
    if (totalExpense > incomeValue) { alert(`You're spending more than your income! 😨`) }


    //savings calculation
    let totalSavings = (incomeValue * (updatedPercent / 100)).toFixed(2);
    let remainingBalance = (incomeValue - totalSavings - totalExpense).toFixed(2);


    let containerArray = [totalSavings, remainingBalance, newBalance]
    return containerArray;
}
calculateBtn.addEventListener("click", calculateSpendings)

////calculating savings

function savePercent() {
    newValue = saveInput.value;
    saveText.textContent = `Save: ${newValue}%`;
}

saveInput.addEventListener("input", savePercent)

function calculateSavings(e) {
    let updatedPercent = saveInput.value;
    let containerArray = calculateSpendings(updatedPercent);
    console.log(containerArray)
    savingAmount.textContent = `Saving Amount: ${containerArray[0]}`
    remainingBalanceText.textContent = `Remaining Balance: ${containerArray[1]}`

    //error message
    if (containerArray[0] > containerArray[2]) { alert(`You don't have enough balance to save! 😨`) }

}

saveBtn.addEventListener("click", calculateSavings)



