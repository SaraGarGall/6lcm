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
export function lmc(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  let arrayTwo = integerFactorization(secondNumber);
  let arrayOfCommons = [];
  let arrayFinal = arrayOne.concat(arrayTwo, arrayOfCommons);
  let lmcResult = 1;

  for (let i = 0; i < arrayOne.length; i++) {
    let arrayOneEl = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      if (arrayOneEl == arrayTwoEl) {
        arrayOfCommons.push(arrayTwoEl);
        arrayTwo.shift();
        break;
      } else {
        continue;
      }
    }
  }

  for (let i = 0; i < arrayFinal.length; i++) {
    lmcResult = lmcResult * arrayFinal[i];
  }

  return lmcResult;
}
