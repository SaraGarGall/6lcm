export function primeNumber(n) {
  let result;

  for (let i = 2; i < n; i++) {
    result = n % i != 0 ? true : false;
    if (result == false) {
      return result;
    }
  }
  return result;
}

export function integerFactorization(n) {
  let arrayOfDivisor = [];
  let quotient = n;

  for (let i = 2; i <= n; i++) {
    if (primeNumber(n)) {
      arrayOfDivisor.push(n);
    } else {
      if (quotient % i == 0) {
        quotient = quotient / i;
        arrayOfDivisor.push(i);
        i--;
      } else {
        quotient = quotient;
        continue;
      }
    }
  }
  return arrayOfDivisor;
}

//De aqui para arriba es igual que al GCD, pero en adelante cambia;

// Comunes al mayor exponente y los no comunes, luego se multiplican todos.
// Da el sresultado erroneo. Tengo que averiguar el por que.
export function lcm(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  console.log('arrayOne is:', arrayOne);
  let arrayTwo = integerFactorization(secondNumber);
  console.log('arrayTwo is:', arrayTwo);
  let arrayOfCommons = [];
  let arrayFinal = arrayOfCommons.concat(arrayTwo);
  let lcmResult = 1;

  for (let i = 0; i < arrayOne.length; i++) {
    let arrayOneEl = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      if (arrayOneEl == arrayTwoEl) {
        arrayOfCommons.push(arrayTwoEl);
        arrayTwo.shift();
        arrayOne.shift();
        i--;
        break;
      } else {
        continue;
      }
    }
  }

  if (arrayOne.length > 0 && arrayTwo.length) {
    arrayFinal = arrayOfCommons.concat(arrayOne, arrayTwo);
  } else if (arrayOne.length > 0) {
    arrayFinal = arrayOfCommons.concat(arrayOne);
  } else {
    arrayFinal = arrayOfCommons.concat(arrayTwo);
  }

  console.log("arrayOfCommons is:", arrayOfCommons);
  console.log('arrayOne is:', arrayOne);
  console.log('arrayTwo is:', arrayTwo);
  console.log('arrayFinal is:', arrayFinal);


  for (let i = 0; i < arrayFinal.length; i++) {
    lcmResult = lcmResult * arrayFinal[i];
  }

  return lcmResult;
}


//El programa no peta si se le introduce valores negativos
//mirar si pasar parseInt en Main como filtro