import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULE = 'What number is missing in the progression?';

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
  const progression = generateProgression(
    getRandomArbitrary(1, 100),
    getRandomArbitrary(10, 50),
    getRandomArbitrary(5, 10),
  );
  const randomPosition = getRandomArbitrary(1, progression.length - 1);
  const answer = progression[randomPosition];
  progression[randomPosition] = '..';
  return [progression.join(' '), answer];
};

const run = () => start(RULE, getQuestionAnswer);

export default run;
