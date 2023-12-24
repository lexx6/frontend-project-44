import getRandomArbitrary from '../lib/randomArbitrary.js';
import gcd from '../lib/gcd.js';
import start from '../lib/engine.js';

const RULES = 'Find the greatest common divisor of given numbers.';
const TRIES = 3;

function qna() {
  const firstNum = getRandomArbitrary(1, 20);
  const secondNum = getRandomArbitrary(1, 20);
  const answer = gcd(firstNum, secondNum);
  return [`Question: ${firstNum} ${secondNum}`, answer];
}

const run = () => start(RULES, qna, TRIES);

export default run;
