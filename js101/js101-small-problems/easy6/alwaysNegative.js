//input/output: number / negative number (same or opposite)
//rules: - if input num >= 0 -> return its opposite
//       - if input num < 0 -> return num
//       - 0 should return -0
//data structures: -
//algorithm:
//IF input num >= 0
//  PRINT num * (-1)
//ELSE
//  PRINT num

const negative = num => Math.abs(num) * (-1);

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
negative(-0);    // -0

//Further exploration

function negative(num) {
  if (Object.is(num, -0)) return num;

  return(num >= 0 ? num * -1 : num);
}