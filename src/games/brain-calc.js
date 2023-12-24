import getRandomArbitrary from '../lib/randomArbitrary.js';
import getRandomSym from '../lib/randomSym.js';
import calculation from '../lib/calculation.js';
import start from '../lib/engine.js';

const RULES = 'What is the result of the expression?';
const TRIES = 3;

function qna() {
  const firstNum = getRandomArbitrary(1, 20);
  const secondNum = getRandomArbitrary(1, 20);
  const randomSym = getRandomSym();
  const answer = calculation(firstNum, randomSym, secondNum).toString();
  return [`Question: ${firstNum} ${randomSym} ${secondNum}`, answer];
}

const run = () => start(RULES, qna, TRIES);

export default run;
