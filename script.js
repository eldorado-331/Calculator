let operator = prompt("Please enter the operator you want to perform e.g +, -, *, /");
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
num1 = Number(num1);
num2 = Number(num2);
if (operator == "+") {
    alert(`Your answer =  ${num1 + num2}`);
} else if (operator == "-") {
    alert(`Your answer =  ${num1 - num2}`);
} else if (operator == "*") {
    alert(`Your answer =  ${num1 * num2}`);
} else if (operator == "/") {
    alert(`Your answer =  ${num1 / num2}`);
}else {
    prompt("Invalid Input")
}
console.log(typeof num1)