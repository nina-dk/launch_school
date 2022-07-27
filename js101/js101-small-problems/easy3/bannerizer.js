//given a short string
//log a string that starts and ends with a plus sign
//with a length === string.length + 2
//log a string that starts and ends with | with the same length as above
//log | + " " + string + " " + |
//then repeat the two first steps

//Further exploration
//given a string AND a maximum width

function logInBox(string = "", maxWidth) {
  if (string.length > maxWidth) {
    string = string.slice(0, maxWidth);
  }
  let border = "+";
  border = border.padEnd(string.length + 3, "-") + "+";
  let middleString = "|";
  middleString = middleString.padEnd(string.length + 3, " ") + "|";
  let content = `| ${string} |`;
  console.log(border);
  console.log(middleString);
  console.log(content);
  console.log(middleString);
  console.log(border);
}

//make the string change line when it can't fit, but still be within the box
//without breaking the words

let allLines = [];

function validWidth(words, maxWidth) {
  words.forEach(word => {
    if (word.length > maxWidth) {
      maxWidth = word.length;
    }
  });
  return maxWidth;
}

function createPadding(string, maxWidth) {
  let [rightPadding, leftPadding] = ["", ""];
  if (string.length < maxWidth) {
    let amountOfPadding = (maxWidth - string.length) / 2;
    rightPadding += " ".repeat(Math.ceil(amountOfPadding));
    leftPadding += " ".repeat(Math.floor(amountOfPadding));
  }
  allLines.push(leftPadding + string + rightPadding);
}

function makeMultipleLines(str, maxLength) {
  const words = str.split(" ");
  let line = [];
  while (words.length > 0) {
    while (line.join(" ").length < maxLength && words.length !== 0) {
      line.push(words.shift());
      if (line.join(" ").length > maxLength) {
        words.unshift(line.pop());
        break;
      }
    }
    line = line.join(" ");
    createPadding(line, maxLength);
    line = [];
  }
}

function logInBox(text = "", maxWidth) {
  allLines = [];
  if (text.length <= maxWidth) {
    createPadding(text, maxWidth);
  } else {
    maxWidth = validWidth(text.split(" "), maxWidth);
    makeMultipleLines(text, maxWidth);
  }
  let border = `+${"-".repeat(maxWidth + 2)}+`;
  let middleString = `| ${" ".repeat(maxWidth)} |`;
  console.log(border);
  console.log(middleString);
  allLines.forEach(line => console.log(`| ${line} |`));
  console.log(middleString);
  console.log(border);
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('To boldly go where no one has gone before.', 1);
logInBox('To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real.', 60);
logInBox('', 10);
logInBox('To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real. To boldly go where no one has gone before. To be the bravest of them all. To drink the sea in a glass of beer. To see the miracle is real.', 100);
