// Identify all the files that contain errors
// Find where the potential errors are - see error messages
// Identify each specific error
// test the specific piece of code entirely / console log it
// Find out what the error may be linked to i.e. just this file or used elsewhere?
// Screenshot the code and save as documentation as you go with comments
// Run tests, console logs, and fix each error

function add(numb1, numb2) {
  return numb1 + numb2;
}

function multiply(num1, operator, num2) {
  if (operator === "*") return num1 * num2;
}

function hasPets(hasPet, firstName, lastName) {
  if (hasPet === true) {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return firstName + " " + lastName + " " + "has no pets";
  }
}

let myAccountNumbers = {
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers.account2;
  let secondAccount = myAccountNumbers.account3;
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return answer;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return answer;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return answer;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return answer;
  } else {
    let answer = "Invalid inputs. Try again!";
    return answer;
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
