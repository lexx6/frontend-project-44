import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const number = getRandomArbitrary(1, 20);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return [number, answer];
};

const run = () => start(description, getQuestionAnswer);

export default run;
