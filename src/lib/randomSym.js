import getRandomArbitrary from './randomArbitrary.js';

function getRandomSym(sym = '+-*') {
  return sym[getRandomArbitrary(0, 2)];
}

export default getRandomSym;
