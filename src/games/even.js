import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAnswer = () => {
  const num = getRandomArbitrary(1, 20);
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [num, answer];
};

const run = () => start(RULES, questionAnswer);

export default run;
