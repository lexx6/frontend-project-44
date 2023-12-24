import readlineSync from 'readline-sync';
import greating from './greating.js';

/**
 * Function that starting the game
 * @param {String} rules            Rules for the game
 * @param {Array} qna               Qestion and correct answer
 * @param {Array.String} question   Qestion
 * @param {Array.String} answer     Answer
 * @param {Number} n                Amount of iterations with correct answer of user for win
 */
function start(rules, qna, n) {
  const name = greating();
  console.log(rules);

  for (let i = 0; i < n; i += 1) {
    const [question, answer] = qna();
    console.log(question);
    const input = readlineSync.question('Your answer: ');
    if (answer.toString() === input) {
      console.log('Correct!');
      if (i === n - 1) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default start;
