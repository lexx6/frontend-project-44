import getRandomArbitrary from '../lib/randomArbitrary.js';
import isPrime from '../lib/prime.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const TRIES = 3;

const correctAnswer = (primeOdd) => (primeOdd === 'prime' ? 'yes' : 'no');

function qna() {
  const num = getRandomArbitrary(1, 20);
  const primeOdd = isPrime(num);
  const answer = correctAnswer(primeOdd);
  return [`Question: ${num}`, answer];
}

const run = () => start(RULES, qna, TRIES);

export default run;
