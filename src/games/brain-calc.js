import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const allowedOperations = ['+', '-', '*'];

const calc = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Sorry! This operation is not available.');
  }
};

const startBrainCalc = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const randomIndex = getRandomNumber(0, allowedOperations.length - 1);
  const operation = allowedOperations[randomIndex];
  const expressionResult = calc(operation, firstNumber, secondNumber);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(expressionResult);
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainCalc);
