import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;

const getRandomOperator = (operators) => getRandomNumber(0, operators.length - 1);
const calc = (operation, firstNumber, secondNumber) => {
  let result;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default: throw new Error('Sorry! This operation is not available.');
  }
  return result;
};

const startBrainCalc = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const allowedOperations = ['+', '-', '*'];
  const randomIndex = getRandomOperator(allowedOperations);
  const operation = allowedOperations[randomIndex];
  const expressionResult = calc(operation, firstNumber, secondNumber);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(expressionResult);
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainCalc);
