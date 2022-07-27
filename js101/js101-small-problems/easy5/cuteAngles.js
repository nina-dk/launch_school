//input/output: floating point number representing angle 0-360 deg /
//              string representing angle in degrees, minutes, seconds
//rules: - 60 minutes in a degree -> 60 sec in a minute
//       - use symbols °, ' and "
//data structures: -
//algorithm:
//START
//SET degrees variable to store the integer part of the input number
//by rounding it down to the closest integer
//SET remainder = (degrees - original number) * 60
//SET minutes = the integer part of the remainder
//SET seconds = (remainder - minutes) * 60
//PRINT degrees + minutes + seconds in string form using their symbols
//END
const CONVERSION_NUM = 60;

function dms(number) {
  let degrees = Math.floor(number);
  let remainder = (number - degrees) * CONVERSION_NUM;
  let minutes = Math.floor(remainder);
  let seconds = Math.floor((remainder - minutes) * CONVERSION_NUM);
  return `${degrees}°${minutes < 10 ? "0" + minutes : minutes}'${seconds < 10 ?
    "0" + seconds : seconds}"`;
}

//Further exploration
//To include negative and > 360 input values
//algorithm:
//IF 0 <= number <= 360 continue as before
//ELSE IF number < 0
//  WHILE number < 0
//    add 360 to it
//  Move on to the same steps as before
//ELSE
//  WHILE number > 360
//    decrement it by 360
//  Move to the rest of the steps

function dms(number) {
  while (number < 0) {
    number += 360;
  }

  while (number > 360) {
    number -= 360;
  }

  let degrees = Math.floor(number);
  let remainder = (number - degrees) * CONVERSION_NUM;
  let minutes = Math.floor(remainder);
  let seconds = Math.floor((remainder - minutes) * CONVERSION_NUM);
  console.log(`${degrees}°${minutes < 10 ? "0" + minutes : minutes}'${seconds < 10 ?
    "0" + seconds : seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"