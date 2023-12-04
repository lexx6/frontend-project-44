#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt() {
  return Math.floor(Math.random() * 100, 10);
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return 'noPrime';
    }
  }
  return 'prime';
}

function correctAnswer(primeOdd) {
  if (primeOdd === 'prime') return 'yes';
  return 'no';
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const num = getRandomInt();
  const primeOdd = isPrime(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer(primeOdd) === answer) {
    console.log('Correct!');
    if (i === 2) console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(primeOdd)}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
