//Part 1
// Example:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
  let pattern = new RegExp(`${word.toLowerCase()}`, "gi");
  return text.match(pattern)?.length || 0;
}

console.log(searchWord('sed', text));      // 3

//Further exploration
function searchWord2(word, text) {
  let pattern = new RegExp(`\\b${word?.toLowerCase()}\\b`, "gi");
  return text?.match(pattern)?.length || 0;
}

console.log(searchWord2('qui', text)); // 4
console.log(searchWord2(null, text)); // 0
console.log(searchWord2('qui')); // 0
console.log(searchWord2()); // 0

//Part 2 (+further exploration)
function highlightWord(word, text) {
  let pattern = new RegExp(`\\b${word?.toLowerCase()}\\b`, "gi");
  return text?.replace(pattern, `**${word.toUpperCase()}**`);
}

console.log(highlightWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
console.log(highlightWord('qui', text));
console.log(highlightWord()); // undefined