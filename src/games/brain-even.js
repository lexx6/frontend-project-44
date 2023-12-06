#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomArbitrary(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min, 10);
}

function isEvenOdd(num) {
  if (num % 2 === 0) return 'even';
  return 'odd';
}

function correctAnswer(evenOdd) {
  if (evenOdd === 'even') return 'yes';
  return 'no';
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const num = getRandomArbitrary(1, 20);
  const evenOdd = isEvenOdd(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer(evenOdd) === answer) {
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(evenOdd)}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
