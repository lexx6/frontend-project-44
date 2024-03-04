import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) throw new Error('Wrong number!');
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const number = getRandomArbitrary(2, 20);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const run = () => start(description, getQuestionAnswer);

export default run;
