import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfTheGame = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;

const brainCalc = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const allowedOperations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const operation = allowedOperations[randomIndex];
  let expressionResult;
  switch (operation) {
    case '+':
      expressionResult = firstNumber + secondNumber;
      break;
    case '-':
      expressionResult = firstNumber - secondNumber;
      break;
    case '*':
      expressionResult = firstNumber * secondNumber;
      break;
    default: throw new Error('Sorry! This operation is not available.');
  }
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = String(expressionResult);
  return [question, correctAnswer];
};
export default () => playGame(rulesOfTheGame, brainCalc);
