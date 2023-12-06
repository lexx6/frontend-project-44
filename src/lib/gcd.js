function gcd(firstNum, secondNum) {
  if (!secondNum) return firstNum;
  return gcd(secondNum, firstNum % secondNum);
}

export default gcd;
