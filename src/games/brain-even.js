import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const getEvenNumber = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameBrainEven = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getEvenNumber(question);
  return [question, correctAnswer];
};
export default () => playGame(rulesOfTheGame, gameBrainEven);
