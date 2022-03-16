import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getBiggestCommonDivider = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const startBrainGcd = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getBiggestCommonDivider(num1, num2));
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainGcd);
