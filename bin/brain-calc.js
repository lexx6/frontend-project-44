#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(num = 10) {
  return Math.floor(Math.random() * num, 10);
}

function getRandomSym(sym = '+-*') {
  return sym[getRandomInt(2)];
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

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
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
