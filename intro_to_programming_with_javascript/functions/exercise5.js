function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//It will log nothing because the scream function returns (gets
//popped off the call stack) before the console.log statement gets to
//be executed.