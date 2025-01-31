// Variables

let numOne = '';
let numTwo = '';
let numOperator = '';

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

  if (e.target.parentElement.id === 'digits'){
    if (!numOperator){
      numOne += e.target.textContent;
    } else {
      numTwo += e.target.textContent;
    }
  } else if (e.target.parentElement.id === 'operators' && numOne){
    numOperator = e.target.textContent;
  };

  if (e.target.id === 'equals'){
    operate(numOne, numOperator, numTwo);
  }
  console.log(`${numOne}, ${numOperator}, ${numTwo}`);

}

function displayEquation(eq){

}

function displayResult(a){
  resultText.textContent = `${a}`
}

// Operator Functions

function add(a, b){
  console.log(+a + +b)
  return +a + +b;
}

function subtract(a, b){
  console.log(+a - +b)
  return +a - +b;
}

function multiply(a, b){
  console.log(+a * +b)
  return +a * +b;
}

function divide(a, b){
  console.log(+a / +b)
  return +a / +b;
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