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

function operateValue(firstDigit, operatorDigit, secondDigit){
  numOne = '';
  numTwo = '';
  numOperator = '';

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

function evaluateValue(e){

  if (e === '='){
    if (!numTwo){
      displayResult(`${numOne}`)
    } else {
      operateValue(numOne, numOperator, numTwo);
    }
  } else if (e.target.id === 'equals'){
    
    if (!numTwo){
      displayResult(`${numOne}`)
    } else {
      operateValue(numOne, numOperator, numTwo);
    }

  } else if (e.target.id === 'clear'){

    numTwo = '';
    numOne = '';
    numOperator = '';
    numResult = '';

    displayResult('');

  }
}

function deleteValue(e){
  if (numOne || numOperator || numTwo){
    
    let firstDigit = numOne.toString().split('');
    let secondDigit = numTwo.toString().split('');
    let operatorDigit = numOperator.toString();

    if (numTwo){
      secondDigit.pop();
      numTwo = secondDigit.join();
    } else if (numOperator){
      numOperator = '';
    } else if (numOne){
      firstDigit.pop();
      numOne = firstDigit.join();
    }

    displayEquation(numOne, numOperator, numTwo);

  }
}

function storeValue(e){

  if (isNaN(numResult)){
    displayResult('0');
  }

  if (numResult){

    if (e.target.parentElement.id === 'digits'){
      
      if (!numOperator){
        if (!(numOne.toString().split('').includes('.'))){
          numOne += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        } else if (e.target.classList.contains('digit')){
          numOne += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        }
      } else {
        if (!(numTwo.toString().split('').includes('.'))){
          numTwo += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        } else if (e.target.classList.contains('digit')){
          numTwo += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        }
      }

    } else if (e.target.parentElement.id === 'operators' && numOne){
      numOperator = e.target.textContent;
      displayEquation(numOne, numOperator, numTwo);
    };

  } else {

    if (e.target.parentElement.id === 'digits'){
      if (!numOperator){
        if (!(numOne.toString().split('').includes('.'))){
          numOne += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        } else if (e.target.classList.contains('digit')){
          numOne += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        }
      } else {
        if (!(numTwo.toString().split('').includes('.'))){
          numTwo += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        } else if (e.target.classList.contains('digit')){
          numTwo += e.target.textContent;
          displayEquation(numOne, numOperator, numTwo);
        }
      }
    } else if (e.target.parentElement.id === 'operators' && numOne){
      numOperator = e.target.textContent;
      displayEquation(numOne, numOperator, numTwo);     
    };

  }

}

function keyboardStoreValue(e){
  if (isNaN(numResult)){
    displayResult('0');
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
  numResult = (parseFloat(a) + parseFloat(b)).toPrecision(3);
  numOne = numResult;
  return numResult;
}

function subtract(a, b){
  numResult = (parseFloat(a) - parseFloat(b)).toPrecision(3);
  numOne = numResult;
  return numResult;
}

function multiply(a, b){
  numResult = (parseFloat(a) * parseFloat(b)).toPrecision(3);
  numOne = numResult;
  return numResult;
}

function divide(a, b){

  if (a > 0 && b > 0){
    numResult = (parseFloat(a) / parseFloat(b)).toPrecision(3);
    numOne = numResult;
    return numResult;
  } else {
    return 0;
  }

}

// Event Listeners

for (x of operators){
  x.addEventListener('click', storeValue);
};

for (x of digits){
  x.addEventListener('click', storeValue);
};

for (x of evaluators){
  if (x.id === 'del'){
    x.addEventListener('click', deleteValue);
  } else {
    x.addEventListener('click', evaluateValue);
  }
};

window.addEventListener('keyup', keyboardStoreValue);