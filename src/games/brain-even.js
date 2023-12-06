import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';
import getRandomArbitrary from '../lib/randomArbitrary.js';
import isEvenOdd from '../lib/evenOdd.js';

function correctAnswer(evenOdd) {
  if (evenOdd === 'even') return 'yes';
  return 'no';
}

function run() {
  const name = greating();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomArbitrary(1, 20);
    const evenOdd = isEvenOdd(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer(evenOdd) === answer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(evenOdd)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default run;
