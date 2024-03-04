import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const number = getRandomArbitrary(1, 20);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [number, answer];
};

const run = () => start(RULE, getQuestionAnswer);

export default run;
