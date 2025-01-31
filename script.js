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