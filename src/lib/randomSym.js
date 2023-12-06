import getRandomArbitrary from './randomArbitrary.js';

function getRandomSym(sym = '+-*') {
  return sym[getRandomArbitrary(0, 3)];
}

export default getRandomSym;
