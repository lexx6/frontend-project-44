import getRandomArbitrary from '../lib/randomArbitrary.js';
import isEvenOdd from '../lib/evenOdd.js';
import start from '../lib/engine.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const TRIES = 3;

const correctAnswer = (evenOdd) => (evenOdd === 'even' ? 'yes' : 'no');

function qna() {
  const num = getRandomArbitrary(1, 20);
  const evenOdd = isEvenOdd(num);
  const answer = correctAnswer(evenOdd);
  return [`Question: ${num}`, answer];
}

const run = () => start(RULES, qna, TRIES);

export default run;
