let numOne = 0;
let numTwo = 0;
let operator = '';

function operate(){
  numOne = window.prompt('Enter Number:', '0');
  operator = window.prompt('Enter Operator:', '+');
  numTwo = window.prompt('Enter Number:', '0');
  
  switch(operator){
   
    default:
    case '+':{
      add(numOne, numTwo);
      break;
    }

    case '-':{
      subtract(numOne, numTwo);
      break;
    }

    case '*':{
      multiply(numOne, numTwo);
      break;
    }

    case '/':{
      divide(numOne, numTwo);
      break;
    }

  }

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

// operate()