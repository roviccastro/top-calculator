// Variables

let numOne = '';
let numTwo = '';
let numOperator = '';
let numResult = '';

// DOM Elements

const resultContainer = document.querySelector("#main");
const resultText = document.querySelector("#text-result");

const operatorsContainer = document.querySelector("#operators");
const operators = operatorsContainer.childNodes;

const evaluatorContainer = document.querySelector("#evaluators");
const evaluators = evaluatorContainer.childNodes;

const digitsContainer = document.querySelector("#digits");
const digits = digitsContainer.childNodes;

// Functions

function operate(firstDigit, operatorDigit, secondDigit){
  numOne = '';
  numTwo = '';
  numOperator = '';

  console.log(operatorDigit)
  switch(operatorDigit){
   
    default:
    case '+':{
      displayResult(add(firstDigit, secondDigit));
      break;
    }

    case '-':{
      displayResult(subtract(firstDigit, secondDigit));
      break;
    }

    case '*':{
      displayResult(multiply(firstDigit, secondDigit));
      break;
    }

    case '/':{
      displayResult(divide(firstDigit, secondDigit));
      break;
    }

  }

}

function storeValue(e){

  if (numResult){

    if (e.target.parentElement.id === 'digits'){
      
      if (!numOperator){
        numOne += e.target.textContent;
        displayEquation(numOne, numOperator, numTwo);
      } else {
        numTwo += e.target.textContent;
        displayEquation(numOne, numOperator, numTwo);
      }

    } else if (e.target.parentElement.id === 'operators' && numOne){
      numOperator = e.target.textContent;
      displayEquation(numOne, numOperator, numTwo);
    };

  } else {

    if (e.target.parentElement.id === 'digits'){
      if (!numOperator){
        numOne += e.target.textContent;
        displayEquation(numOne, numOperator, numTwo);
      } else {
        numTwo += e.target.textContent;
        displayEquation(numOne, numOperator, numTwo);
      }
    } else if (e.target.parentElement.id === 'operators' && numOne){
      numOperator = e.target.textContent;
      displayEquation(numOne, numOperator, numTwo);
    };

  }

  if (e.target.id === 'equals'){
    
    if (!numTwo){
      displayResult(`${numOne}`)
    } else {
      operate(numOne, numOperator, numTwo);
    }

  }

}

function displayEquation(firstDigit, operatorDigit, secondDigit){
  resultText.textContent = `${firstDigit} ${operatorDigit} ${secondDigit}`
}

function displayResult(e){
  resultText.textContent = `${e}`
}

// Operator Functions

function add(a, b){
  numResult = parseInt(a) + parseInt(b);
  numOne = numResult;
  return numResult;
}

function subtract(a, b){
  numResult = parseInt(a) - parseInt(b);
  NumOne = numResult;
  return numResult;
}

function multiply(a, b){
  numResult = parseInt(a) * parseInt(b);
  NumOne = numResult;
  return numResult;
}

function divide(a, b){
  numResult = parseInt(a) / parseInt(b);
  NumOne = numResult;
  return numResult;
}

// Event Listeners

for (x of operators){
  x.addEventListener('click', storeValue);
};

for (x of digits){
  x.addEventListener('click', storeValue);
};

for (x of evaluators){
  x.addEventListener('click', storeValue);
};