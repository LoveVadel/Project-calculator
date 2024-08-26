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
   
/* this function will be called on numbers button click and it will take in the button value and store it in the stordata array.  */
function buttonClick(value){
    storData.push(value);
    dataToNum = Number(storData.join(""));
}


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
const equalTo = document.querySelector("#equalTo");
const addButton = document.querySelector("#addButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const subButton = document.querySelector("#subButton");


//Add eventListener to all numbers button with the call back function "buttonClick"
one.addEventListener("click", ()=>{ 
    screen.textContent += 1;
    return(buttonClick(1));
});
two.addEventListener("click", ()=>{ 
    screen.textContent += 2;
    return(buttonClick(2));
});
three.addEventListener("click", ()=>{ 
    screen.textContent += 3;
    return(buttonClick(3));
});
four.addEventListener("click", ()=>{ 
    screen.textContent += 4;
    return(buttonClick(4));
});
five.addEventListener("click", ()=>{ 
    screen.textContent += 5;
    return(buttonClick(5));
});
six.addEventListener("click", ()=>{ 
    screen.textContent += 6;
    return(buttonClick(6));
});
seven.addEventListener("click", ()=>{ 
    screen.textContent += 7;
    return(buttonClick(7));
});
eight.addEventListener("click", ()=>{ 
    screen.textContent += 8;
    return(buttonClick(8));
});
nine.addEventListener("click", ()=>{ 
    screen.textContent += 9;
    return(buttonClick(9));
});
zero.addEventListener("click", ()=>{ 
    screen.textContent += 0;
    return(buttonClick(0));
});



//Add eventListener to operator button with a function that updates the ui screen, add all user input to data storage, and calls the operators functions.

let dataStoring = {};

addButton.addEventListener("click", ()=>{ 
    screen.textContent += "+"
    dataStoring.firstnum = dataToNum;
    dataStoring.addOperator = add;
    storData = [];  
       
})

subButton.addEventListener("click", ()=>{ 
    screen.textContent += "-"
    dataStoring.firstnum = dataToNum;
    dataStoring.addOperator = subtract;
    storData = [];       
})

divideButton.addEventListener("click", ()=>{ 
    screen.textContent += "/"
    dataStoring.firstnum = dataToNum;
    dataStoring.addOperator = divide;
    storData = [];       
})

multiplyButton.addEventListener("click", ()=>{ 
    screen.textContent += "*"
    dataStoring.firstnum = dataToNum;
    dataStoring.addOperator = multiply;
    storData = [];       
})


//Add eventListener to equal button
equalTo.addEventListener("click", ()=>{
    dataStoring.secondNum = dataToNum;
    let calculate = operator(dataStoring.addOperator, dataStoring.firstnum, dataStoring.secondNum);
    screen.textContent = calculate
})


