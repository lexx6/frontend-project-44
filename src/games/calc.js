import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../lib/engine.js';

const RULES = 'What is the result of the expression?';
const TRIES = 3;

function getRandomSym(sym = '+-*') {
  return sym[getRandomArbitrary(0, 2)];
}

function calculate(number1, symbol, number2) {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown symbol!');
  }
}

function questionAnswer() {
  const number1 = getRandomArbitrary(1, 20);
  const number2 = getRandomArbitrary(1, 20);
  const symbol = getRandomSym();
  const answer = calculate(number1, symbol, number2).toString();
  return [`Question: ${number1} ${symbol} ${number2}`, answer];
}

const run = () => start(RULES, questionAnswer, TRIES);

export default run;
