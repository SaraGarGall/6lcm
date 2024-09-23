export function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true;
}

export function integerFactorization(n) {
  let arrayOfDivisor = [];
  let quotient = n;
  //The next if statement is called "Guard clause"
  //This change has to be added to the exercise number 5 too.
  if (primeNumber(n)) {
      arrayOfDivisor.push(n)
      return arrayOfDivisor;
    }

  for (let i = 2; i <= n; i++) {
    if (quotient % i == 0) {
        quotient = quotient / i;
        arrayOfDivisor.push(i);
        i--;
      }
    }
  return arrayOfDivisor;
}

export function lcm(firstNumber, secondNumber) {
  let arrayOne = integerFactorization(firstNumber);
  let arrayTwo = integerFactorization(secondNumber);
  let arrayOfCommons = [];
  let arrayFinal = [];
  let lcmResult = 1;

  for (let i = 0; i < arrayOne.length; i++) {
    let arrayOneEl = arrayOne[i];

    for (let j = 0; j < arrayTwo.length; j++) {
      let arrayTwoEl = arrayTwo[j];

      if (arrayOneEl == arrayTwoEl) {
        arrayOfCommons.push(arrayOneEl);
        arrayOne.splice(i,1);
        arrayTwo.splice(j,1);
        i--;
        j--;
        break;
      }
    }
  }

  if (arrayOne.length > 0) {
    arrayFinal = arrayOfCommons.concat(arrayOne)
  }

  if (arrayTwo.length > 0) {
    arrayFinal = arrayOfCommons.concat(arrayTwo)
  }

  for (let i = 0; i < arrayFinal.length; i++) {
    lcmResult = lcmResult * arrayFinal[i];
  }

  return lcmResult;
}
