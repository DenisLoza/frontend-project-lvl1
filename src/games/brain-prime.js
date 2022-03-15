import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrimeNumber = (num) => {
  let flag = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = 'no';
      break;
    }
  }
  return flag;
};

const brainPrime = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrimeNumber(question);
  return [question, correctAnswer];
};
export default () => playGame(rulesOfTheGame, brainPrime);
