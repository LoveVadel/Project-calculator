//Create a function that takes in two numbers and adds them together.
function add(num1, num2){
    return num1 + num2;
}

//Create a function that takes in two numbers and subtracts one from the other.
function subtract(num1, num2){
    return num1 - num2;
}

// create a function that takes in numbers and multiply them to return a final number.
function multiply(num1, num2){
    return num1 * num2;
}

//Create a function that takes in two numbers and divide one with the other to return a final number.
function divide(num1, num2){
    return num1 / num2;
}


let firstNumber;
let calOperator;
let secondNumber;

//this function takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operator(operate, ...numb){
    return operate(numb[0], numb[1])
}

let storData =[];
let dataToNum;
   
// this function will be called on numbers button click and it will take in the button value and store it in the stordata array.  
function buttonClick(value){
    storData.push(value);
    dataToNum = Number(storData.join(""));
}




