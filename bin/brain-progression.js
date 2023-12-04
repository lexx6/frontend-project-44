#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min, 10);
}

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

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
  const arr = buildQuestion();
  const randomPosition = getRandomArbitrary(1, arr.length);
  const correctAnswer = arr[randomPosition];
  arr[randomPosition] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
