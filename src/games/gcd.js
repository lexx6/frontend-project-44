import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) return number1;
  return gcd(number2, number1 % number2);
};

const questionAnswer = () => {
  const number1 = getRandomArbitrary(1, 20);
  const number2 = getRandomArbitrary(1, 20);
  const answer = gcd(number1, number2);
  return [`${number1} ${number2}`, answer];
};

const run = () => start(RULES, questionAnswer);

export default run;
