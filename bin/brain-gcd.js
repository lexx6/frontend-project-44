#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(num = 100) {
  return Math.floor(Math.random() * num, 10);
}

function gcd(firstNum, secondNum) {
  if (!secondNum) return firstNum;
  return gcd(secondNum, firstNum % secondNum);
}

function greating() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

const name = greating();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const correctAnswer = gcd(firstNum, secondNum);
  console.log(`Question: ${firstNum} ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
