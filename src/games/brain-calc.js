import readlineSync from 'readline-sync';
import greating from '../lib/greating.js';

function getRandomArbitrary(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min, 10);
}

function getRandomSym(sym = '+-*') {
  return sym[getRandomArbitrary(0, 3)];
}

function calculationAnswer(firstNum, randomSym, secondNum) {
  switch (randomSym) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
}

function calculation(firstNum, randomSym, secondNum) {
  switch (randomSym) {
    case '+':
      return `${firstNum} + ${secondNum}`;
    case '-':
      return `${firstNum} - ${secondNum}`;
    default:
      return `${firstNum} * ${secondNum}`;
  }
}

function run() {
  const name = greating();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomArbitrary(1, 20);
    const secondNum = getRandomArbitrary(1, 20);
    const randomSym = getRandomSym();
    console.log(`Question: ${calculation(firstNum, randomSym, secondNum)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === calculationAnswer(firstNum, randomSym, secondNum).toString()) {
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calculationAnswer(firstNum, randomSym, secondNum)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export default run;
