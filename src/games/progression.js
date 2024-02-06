import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'What number is missing in the progression?';
const TRIES = 3;

function buildQuestion() {
  let startNum = getRandomArbitrary(1, 100);
  const nextNum = getRandomArbitrary(10, 50);
  const circles = getRandomArbitrary(5, 10);
  const result = [];
  for (let i = 0; i < circles; i += 1) {
    result.push(startNum);
    startNum += nextNum;
  }
  return result;
}

function questionAnswer() {
  const arr = buildQuestion();
  const randomPosition = getRandomArbitrary(1, arr.length - 1);
  const answer = arr[randomPosition];
  arr[randomPosition] = '..';
  return [`Question: ${arr.join(' ')}`, answer];
}

const run = () => start(RULES, questionAnswer, TRIES);

export default run;
