//given a positive integer n
//SET triangle function that takes n as an argument
//logs a right triangle whose sides have n stars.

//START
//SET i = 1
//WHILE i <= n
// PRINT n - i number of spaces + i number of stars
// increment i
//END

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log((" ").repeat(n - i) + ("*").repeat(i));
  }
}

triangle(5);
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
triangle(20);