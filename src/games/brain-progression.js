import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const ruleOfTheGame = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 100;
const minLength = 5;
const maxLength = 10;
const minProgDifference = 1;
const maxProgDifference = 5;

const progressionGenerator = () => {
  const startNumber = getRandomNumber(minNumber, maxNumber);
  const lengthProgression = getRandomNumber(minLength, maxLength);
  const progDifference = getRandomNumber(minProgDifference, maxProgDifference);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startNumber + progDifference * i);
  }
  return progression;
};

const startBrainProgression = () => {
  const progression = progressionGenerator();
  const indexRandomNumberAnswer = getRandomNumber(minLength - 1, progression.length - 1);
  const correctAnswer = String(progression[indexRandomNumberAnswer]);
  progression[indexRandomNumberAnswer] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => playGame(ruleOfTheGame, startBrainProgression);
