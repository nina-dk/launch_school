//calculate the area of each rectangle (height * width) -> map
//add all of the areas together -> reduce

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  return rectangles.map(rect => rect[0] * rect[1])
                   .reduce((area, currArea) => area + currArea);
}

//first select the square (height === width) -> filter
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rect => rect[0] === rect[1]);
  return totalArea(squares);
}

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));