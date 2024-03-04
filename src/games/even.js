import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const number = getRandomArbitrary(1, 20);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const run = () => start(description, getQuestionAnswer);

export default run;
