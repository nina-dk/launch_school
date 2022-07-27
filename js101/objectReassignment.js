let objA = {language: "Javascript"};
let objB = objA;
console.log(objB);
console.log(objA === objB);

function mutateObj(obj) {
  obj["typeOfThis"] = "object";
  return obj;
}

mutateObj(objB);
console.log(objB); // {language: "Javascript", typeOfThis: "object"}
console.log(objA === objB);

function reassignObj(obj) {
  obj = {language: "JavaScript"};
  console.log(obj); // {language: "JavaScript"}
  return obj;
}

reassignObj(objA);
console.log(objA); // {language: "Javascript", typeOfThis: "object"}
console.log(objA === objB); // true

function reassignObjA() {
  objA = {language: "JavaScript"};
}

reassignObjA();
console.log(objA); // {language: "JavaScript"}
console.log(objA === objB); // false