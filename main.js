import { lcm } from './utility.js';
import inquirer from 'inquirer';

const validateNumber = (input)=> {
  if (input >= 1) {
    return true;
  } else {
    return 'Error. Both numbers have to be greater than or equal to 0.';
  }
}

let firstNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message:
      'Enter the first number for which you would like to know the Greatest Common Divisor: ',
    validate: validateNumber
  }
]);

let secondNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'Enter the second number now: ',
    validate: validateNumber
  }
]);

//Meter una validacion en la que si el numero es menor o igual que 0 entonces de un error

const result = lcm(firstNumber.number, secondNumber.number);

console.log(
  'the LCM of',
  firstNumber.number,
  'and',
  secondNumber.number,
  'is:',
  result
);