import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';

function getRandomArbitrary(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min, 10);
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return 'noPrime';
    }
  }
  return 'prime';
}

function correctAnswer(primeOdd) {
  if (primeOdd === 'prime') return 'yes';
  return 'no';
}

function run() {
  const name = greating();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomArbitrary(1, 20);
    const primeOdd = isPrime(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer(primeOdd) === answer) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(primeOdd)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default run;
