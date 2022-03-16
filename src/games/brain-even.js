import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const isEvenNumber = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startBrainEven = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEvenNumber(question);
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainEven);
