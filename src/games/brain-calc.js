import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';
import getRandomArbitrary from '../lib/randomArbitrary.js';
import getRandomSym from '../lib/randomSym.js';
import calculation from '../lib/calculation.js';

function run() {
  const name = greating();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomArbitrary(1, 20);
    const secondNum = getRandomArbitrary(1, 20);
    const randomSym = getRandomSym();
    console.log(`Question: ${firstNum} ${randomSym} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === calculation(firstNum, randomSym, secondNum).toString()) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calculation(firstNum, randomSym, secondNum)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default run;
