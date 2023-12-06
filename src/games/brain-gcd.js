import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';

function getRandomArbitrary(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min, 10);
}

function gcd(firstNum, secondNum) {
  if (!secondNum) return firstNum;
  return gcd(secondNum, firstNum % secondNum);
}

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
