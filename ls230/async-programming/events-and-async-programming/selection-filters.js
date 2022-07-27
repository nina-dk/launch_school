"use strict";

let classAnimals = {
  "Vertebrate":	["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
  "Warm-blooded":	["Bear", "Whale", "Ostrich"],
  "Cold-blooded":	["Salmon", "Turtle"],
  "Mammal":	["Bear", "Whale"],
  "Bird":	["Ostrich"]
};

let classifications = document.querySelector("#animal-classifications");
let animals = document.querySelector("#animals");
let clearBtn = document.querySelector("#clear");

function traverseCollection(collection, callback) {
  for (let idx = 0; idx < collection.children.length; idx += 1) {
    let currEl = collection.children[idx];
    callback(currEl);
  }
}

function unavailableClassification(classification, animals) {
  return !classAnimals[classification] || !animals.some(animal => {
    return classAnimals[classification].includes(animal);
  });
}

function findElToSelect(collection) {
  let elements = Array.from(collection);
  let elToSelect = elements.find(el => !el.classList.contains("hidden"));
  elToSelect.selected = true;
}

function hideOption(option) {
  option.classList.add("hidden");
}

function revealOption(option) {
  option.classList.remove("hidden");
}

classifications.addEventListener("change", (e) => {
  let currentClass = e.target.value;
  let availableAnimals = classAnimals[currentClass];

  traverseCollection(animals, animal => {
    if (!availableAnimals.includes(animal.value)) {
      hideOption(animal);
    }
  });

  traverseCollection(classifications, classification => {
    if (unavailableClassification(classification.value, availableAnimals)) {
      hideOption(classification);
    }
  });

  findElToSelect(animals);
});

animals.addEventListener("change", (e) => {
  let currentAnimal = e.target.value;
  traverseCollection(classifications, classification => {
    if (!classAnimals[classification.value] || 
        !classAnimals[classification.value].includes(currentAnimal)) {
      hideOption(classification);
    }
  });

  findElToSelect(classifications);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  traverseCollection(classifications, revealOption);
  traverseCollection(animals, revealOption);

  location.reload();
});

/*
-construct an object where the keys are animal classification options
 and the values are the animals that belong to that category
-once a classification option is selected
  -iterate through the animals in the animal selection dropdown
    -if the current animal's value is not included in the animals
     of the currently selected classification in the object
      -add the `hidden-option` class to it
  -iterate through the remaining classifications
    -if any of the currently available animals is included in its
     associated array of animals in the object
      -do nothing
    -otherwise, add the same class to it
-once an animal is selected
  -iterate through the animal classifications keys from the dropdown
    -if the selected animal is not in the array of animals that's associated
     with that classification
      -add the `hidden-option` class to it

-if the `clear` button is clicked on
  -remove the `hidden-option` class from all children of both
  `classifications` and `animals`
*/