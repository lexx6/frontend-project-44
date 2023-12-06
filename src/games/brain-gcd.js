import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';
import getRandomArbitrary from '../lib/randomArbitrary.js';
import gcd from '../lib/gcd.js';

function run() {
  const name = greating();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomArbitrary(1, 20);
    const secondNum = getRandomArbitrary(1, 20);
    const correctAnswer = gcd(firstNum, secondNum);
    console.log(`Question: ${firstNum} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default run;
