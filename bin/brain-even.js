#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() { // функция возвращает рандомное целое число
  return Math.floor(Math.random() * 1000, 10);
}

function isEvenOdd(num) { // функция возвращает результат четное (even) или нечетное (odd) число
  if (num % 2 === 0) return 'even';
  return 'odd';
}

function correctAnswer(evenOdd) { // функция возвращает правильный ответ
  if (evenOdd === 'even') return 'yes';
  return 'no';
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt();
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
