import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) throw new Error('Wrong number!');
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questionAnswer = () => {
  const num = getRandomArbitrary(2, 20);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

const run = () => start(RULES, questionAnswer);

export default run;
