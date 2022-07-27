let isNegativeZero = num => {
  if (num === 0 && (Infinity / num === -Infinity)) {
  return true;
  }
  return false;
}