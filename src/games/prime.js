import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const TRIES = 3;

const correctAnswer = (primeOdd) => (primeOdd === 'prime' ? 'yes' : 'no');

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

function questionAnswer() {
  const num = getRandomArbitrary(1, 20);
  const primeOdd = isPrime(num);
  const answer = correctAnswer(primeOdd);
  return [`Question: ${num}`, answer];
}

const run = () => start(RULES, questionAnswer, TRIES);

export default run;
