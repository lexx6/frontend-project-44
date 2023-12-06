function calculation(firstNum, randomSym, secondNum) {
  switch (randomSym) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
}

export default calculation;
