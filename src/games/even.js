import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const TRIES = 3;

const isEven = (num) => !!(num % 2 === 0);

function questionAnswer() {
  const num = getRandomArbitrary(1, 20);
  const answer = isEven(num) ? 'yes' : 'no';
  return [`Question: ${num}`, answer];
}

const run = () => start(RULES, questionAnswer, TRIES);

export default run;
