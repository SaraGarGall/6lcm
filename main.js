import { lcm } from './utility.js';
import inquirer from 'inquirer';

let firstNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message:
      'Enter the first number for which you would like to know the Greatest Common Divisor: '
  }
]);

let secondNumber = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'Enter the second number now: '
  }
]);

const result = lcm(firstNumber.number, secondNumber.number);

console.log(
  'the LCM of',
  firstNumber.number,
  'and',
  secondNumber.number,
  'is:',
  result
);