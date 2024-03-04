import getRandomArbitrary from '../lib/randomArbitrary.js';
import start from '../engine.js';

const description = 'What is the result of the expression?';

const calculate = (number1, symbol, number2) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown symbol: ${symbol}`);
  }
};

const getQuestionAnswer = () => {
  const number1 = getRandomArbitrary(1, 20);
  const number2 = getRandomArbitrary(1, 20);
  const symbols = ['+', '-', '*'];
  const symbol = symbols.at(getRandomArbitrary(0, symbols.length - 1));
  const answer = calculate(number1, symbol, number2).toString();
  return [`${number1} ${symbol} ${number2}`, answer];
};

const run = () => start(description, getQuestionAnswer);

export default run;
