import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const description = 'What number is missing in the progression?';

const generateProgression = (from, step, count) => {
  const result = [];
  let current = from;
  for (let i = 0; i < count; i += 1) {
    result.push(current);
    current += step;
  }
  return result;
};

const getQuestionAnswer = () => {
  const from = getRandomArbitrary(1, 100);
  const step = getRandomArbitrary(10, 50);
  const count = getRandomArbitrary(5, 10);
  const progression = generateProgression(from, step, count);
  const randomPosition = getRandomArbitrary(1, progression.length - 1);
  const answer = progression[randomPosition];
  progression[randomPosition] = '..';
  return [progression.join(' '), answer];
};

const run = () => start(description, getQuestionAnswer);

export default run;
