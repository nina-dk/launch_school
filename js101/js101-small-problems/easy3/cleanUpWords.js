//START
//given a string, possibly containing non-alphabetic
//characters mixed up with letters
//SET counter = 0
//WHILE counter < string's length
//  IF character at index counter is non-alphabetic
//    IF the previous character is not equal to " "
//      Replace it with a space
//      Increment counter
//    ELSE
//      Replace it with the empty string
//PRINT string
//END

function isLetter(str, idx) {
  if (str.charCodeAt(idx) < 65) return true;
  if (str.charCodeAt(idx) > 90 && str.charCodeAt(idx) < 97) return true;
  if (str.charCodeAt(idx) > 122) return true;
  return false;
}

function cleanUp(string) {
  let counter = 0;
  let cleanString = "";
  while (counter < string.length) {
    if (isLetter(string, counter)) {
      // eslint-disable-next-line no-unused-expressions
      cleanString[cleanString.length - 1] === " " ? cleanString += "" : cleanString += " ";
    } else {
      cleanString += string[counter];
    }
    counter += 1;
  }
  console.log(cleanString);
}

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("");
cleanUp("   ");
cleanUp("&%$@#$^*((a ");
cleanUp("vdnoIntov  moiNmrOi indoi");
cleanUp("dn4859G9vn he839 == D");