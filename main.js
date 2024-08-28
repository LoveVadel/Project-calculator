// create a variable for all button in index.html
const screen = document.querySelector("#screen");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const dot = document.querySelector("#dot");
const equalTo = document.querySelector("#equalTo");
const addButton = document.querySelector("#addButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const subButton = document.querySelector("#subButton");
const clearButton = document.querySelector("#clearButton");
const resetButton = document.querySelector("#resetButton");

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


let firstNumber = "";
let calOperator = "";
let secondNumber = "";

//Below function takes in an operator and 2 numbers and then calls one of the above functions on the numbers

function operate (operator, ...numbs){
    if(operator === "+"){
     let addNum = add(numbs[0], numbs[1]);
     return addNum;
    }
    else if(operator === "-"){
      let subNum = subtract(numbs[0], numbs[1]);
      return subNum;
     }
     else if(operator === "/"){
      let divideNum = divide(numbs[0], numbs[1]);
      return divideNum;
     }
     else if(operator === "*"){
      let multiplyNum = multiply(numbs[0], numbs[1]);
      return multiplyNum;
     }
    
  }
// this function will be added to the click event of the buttons, 
  function buttonClick(value){
    if(calOperator === "+" || calOperator === "*" || calOperator === "/" || calOperator === "-"){
      secondNumber += value;
      screen.textContent += value;
    }
    else{
    firstNumber += value
    screen.textContent += value;
    }
}

//Add eventListener to all numbers button with the call back function "buttonClick"
one.addEventListener("click", ()=>{
    return buttonClick("1");
  })
  two.addEventListener("click", ()=>{
    return buttonClick("2");
  })
  three.addEventListener("click", ()=>{
    return buttonClick("3");
  })
  four.addEventListener("click", ()=>{
    return buttonClick("4");
  })
  five.addEventListener("click", ()=>{
    return buttonClick("5");
  })
  six.addEventListener("click", ()=>{
    return buttonClick("6");
  })
  seven.addEventListener("click", ()=>{
    return buttonClick("7");
  })
  eight.addEventListener("click", ()=>{
    return buttonClick("8");
  })
  nine.addEventListener("click", ()=>{
    return buttonClick("9");
  })
  zero.addEventListener("click", ()=>{
    if(firstNumber[0] === "0" && firstNumber.length === 1){
        // zero button click wont execute
    }
    else{
    return buttonClick("0");
    }
  })

//add a condition to dot button so that a user cannot start input by . dot 
  dot.addEventListener("click", ()=>{
    if(firstNumber === ""){
        // dot button click wont execute
    }
    else if (firstNumber.includes(".") && secondNumber.length === 0){
        // dot button click wont execute
    }
    else if(secondNumber.includes(".")){
        // dot button click wont execute
    }
    else{
    return buttonClick(".");
    }
  })

//this function does the same thing as the EqualTo function with a little modification, but this will be added to the operator buttons so that when an operator is pressed again without the = , it will compute the answer...
function operatorsEqualTo(value){
    let calculate = operate(calOperator, Number(firstNumber), Number(secondNumber));
    if(calculate === undefined){
      firstNumber = "";
    }
    else{

        if(Number.isInteger(calculate)=== true || calculate.toString().length <= 10){
            firstNumber = calculate;
            secondNumber = ""
            calOperator = value;
            screen.textContent = firstNumber + calOperator;
            }

        else{
            firstNumber = calculate.toFixed(9);
            secondNumber = ""
            calOperator = value;
            screen.textContent = firstNumber + calOperator;
            }

        }
  }

//Add eventListener to operator button with a function that updates the ui screen
  addButton.addEventListener("click", ()=>{
    if (firstNumber.length === 0){
        firstNumber = "";
        calOperator = "";
        secondNumber = ""
    }
    else{
        if(secondNumber.length !== 0){
        return operatorsEqualTo("+")
        }
        calOperator = "+";
        screen.textContent = firstNumber + calOperator;
    }
  })

  multiplyButton.addEventListener("click", ()=>{
    if (firstNumber.length === 0){
        firstNumber = "";
        calOperator = "";
        secondNumber = ""
    }
    else{
        if(secondNumber.length !== 0){
            return operatorsEqualTo("*")
        }
        calOperator = "*";
        screen.textContent = firstNumber + calOperator;
    }
  })

  subButton.addEventListener("click", ()=>{
    if (firstNumber.length === 0){
        firstNumber = "";
        calOperator = "";
        secondNumber = ""
    }
    else{
        if(secondNumber.length !== 0){
            return operatorsEqualTo("-")
        }
        calOperator = "-";
        screen.textContent = firstNumber + calOperator;
    }
  })

  divideButton.addEventListener("click", ()=>{
    if (firstNumber.length === 0){
        firstNumber = "";
        calOperator = "";
        secondNumber = ""
    }
    else{
        if(secondNumber.length !== 0){
            return operatorsEqualTo("/")
        }
        calOperator = "/";
        screen.textContent = firstNumber + calOperator;
    }
  })

//Add eventListener to equal to button and a condition which round up the answer to 10 decimal place if answer not an integer or length > 10.
  equalTo.addEventListener("click", ()=>{
    let calculate = operate(calOperator, Number(firstNumber), Number(secondNumber));
    if(calculate === undefined){
      firstNumber = firstNumber;
    }
    else{
        if(Number.isInteger(calculate)=== true || calculate.toString().length <= 10){
            firstNumber = calculate.toString();
            secondNumber = ""
            screen.textContent = firstNumber;
            calOperator = "";
            }

        else{
            firstNumber = calculate.toFixed(9);
            secondNumber = ""
            screen.textContent = firstNumber;
            }
        }
  })  

resetButton.addEventListener("click", ()=>{
    firstNumber = "";
    secondNumber = "";
    screen.textContent = "";
    calOperator = "";
})



//Clear/backspace button.. 
function backSpace(){
    if(secondNumber.length !== 0){
        secondNumber = secondNumber.slice(0, -1)
        screen.textContent = screen.textContent.slice(0, -1)
        return secondNumber;
    }
    else if(calOperator.length !== 0){
        calOperator = calOperator.slice(0, -1)
        screen.textContent = screen.textContent.slice(0, -1)
    }
    else if( firstNumber.length !== 0){
        firstNumber = firstNumber.toString().slice(0, -1)
        screen.textContent = screen.textContent.slice(0, -1)
        
    }
}

clearButton.addEventListener("click", backSpace)