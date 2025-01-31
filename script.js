let numOne = '';
let numTwo = '';
let numOperator = '';

const operatorsContainer = document.querySelector("#operators");
const operators = document.querySelectorAll(".operator");

function operate(firstDigit, operatorDigit, secondDigit){
  
  switch(operatorDigit){
   
    default:
    case '+':{
      add(firstDigit, secondDigit);
      break;
    }

    case '-':{
      subtract(firstDigit, secondDigit);
      break;
    }

    case '*':{
      multiply(firstDigit, secondDigit);
      break;
    }

    case '/':{
      divide(firstDigit, secondDigit);
      break;
    }

  }

}

function storeValue(e){
  
}

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
  if(!a | !b){
    return `Can't divide by 0`
  }
  console.log(+a / +b)
  return +a / +b;
}

for (x of operators){
  x.addEventListener('click', storeValue)
}