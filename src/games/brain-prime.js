import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isPrimeNumber = (num) => {
  if (num < 2) { return false; }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startBrainPrime = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainPrime);
