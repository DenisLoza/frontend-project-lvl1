import readlineSync from 'readline-sync';

const iterationGame = 3;

const playGame = (rulesOfTheGame, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);

  for (let i = 1; i <= iterationGame; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}!`);
    const userAnswer = readlineSync.question('Your answer: ');
    const total = correctAnswer === userAnswer;
    const gameOver = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    if (!total) {
      console.log(gameOver);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
