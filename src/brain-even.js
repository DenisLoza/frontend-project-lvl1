import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const getEvenNumber = (anyNumber) => (anyNumber % 2 === 0 ? 'yes' : 'no');

  const gameBrainEven = () => {
    const gameOver = `Let's try again, ${userName}!`;
    const anyNumber = getRandomArbitrary(1, 1000);
    console.log(`Question: ${anyNumber}!`);
    const evenNumber = getEvenNumber(anyNumber);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = evenNumber === userAnswer;
    if (!correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${evenNumber}'.`);
      return console.log(gameOver);
    }
    console.log('Correct!');
    i += 1;
    return (i < 3) ? gameBrainEven() : console.log(`Congratulations, ${userName}!`);
  };

  gameBrainEven();
};

export default brainEven;
