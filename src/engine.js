import readlineSync from 'readline-sync';

const triesCount = 3;

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < triesCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const input = readlineSync.question('Your answer: ');
    if (answer.toString() !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
