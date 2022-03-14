import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getBiggestCommonDivider = () => {
  let x = getRandomNumber(minNumber, maxNumber);
  let y = getRandomNumber(minNumber, maxNumber);
  const question = `${x} ${y}`;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  const correctAnswer = String(x + y);
  return [question, correctAnswer];
};
export default () => playGame(rulesOfTheGame, getBiggestCommonDivider);
