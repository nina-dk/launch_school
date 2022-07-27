class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (!this.adoptions.hasOwnProperty(owner.name)) {
      this.adoptions[owner.name] = owner.pets;
    }

    owner.pets.push(pet);
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      if (owner === "Animal shelter") {
        console.log(`The ${owner} has the following unadopted pets:`);
      } else {
        console.log(`${owner} has adopted the following pets:`);
      }
      this.adoptions[owner]
        .forEach(pet => console.log(`a ${pet.species} named ${pet.name}`));
      console.log("");
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let asta = new Pet("dog", "Asta");
let laddie = new Pet("dog", "Laddie");
let fluffy = new Pet("cat", "Fluffy");
let kat = new Pet("cat", "Kat");
let ben = new Pet("cat", "Ben");
let chatterbox = new Pet("parakeet", "Chatterbox");
let bluebell = new Pet("parakeet", "Bluebell");

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let animalShelter = new Owner('Animal shelter');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.adopt(animalShelter, asta);
shelter.adopt(animalShelter, laddie);
shelter.adopt(animalShelter, fluffy);
shelter.adopt(animalShelter, kat);
shelter.adopt(animalShelter, ben);
shelter.adopt(animalShelter, chatterbox);
shelter.adopt(animalShelter, bluebell);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`The ${animalShelter.name} has ${animalShelter.numberOfPets()} unadopted pets.`);

// The Animal Shelter has the following unadopted pets:
// a dog named Asta
// a dog named Laddie
// a cat named Fluffy
// a cat named Kat
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
// The Animal shelter has 7 unadopted pets.