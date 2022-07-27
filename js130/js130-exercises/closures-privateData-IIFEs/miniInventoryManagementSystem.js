"use strict";

// eslint-disable-next-line max-lines-per-function
function Item(name, category, quantity) {
  function generateSKUCode() {
    let SKUCode = "";
    for (let idx = 0; SKUCode.length < 3; idx++) {
      if (name[idx] !== "") SKUCode += name[idx];
    }

    for (let idx = 0; idx < 2; idx++) {
      SKUCode += category[idx];
    }

    return SKUCode.toUpperCase();
  }

  function validateName() {
    return name.split("").filter(char => char).length >= 5;
  }

  function validateCategory() {
    return !category.includes(" ") && (category.length >= 5);
  }

  function validateQuantity() {
    return (quantity !== undefined) && (quantity !== null);
  }

  function isValid() {
    return validateName() && validateCategory() && validateQuantity();
  }

  this.SKUCode = generateSKUCode();
  this.name = name;
  this.category = category;
  this.quantity = quantity;

  if (!isValid()) return { notValid: true };
}

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new Item(name, category, quantity);
    if (item.notValid) return false;
    else this.items.push(item);
  },

  findItemBySKUCode(SKUCode) {
    return this.items.find(item => item.SKUCode === SKUCode);
  },

  update(SKUCode, props) {
    let itemToUpdate = this.findItemBySKUCode(SKUCode);

    for (let prop in props) {
      itemToUpdate[prop] = props[prop];
    }
  },

  delete(SKUCode) {
    let itemToDelete = this.findItemBySKUCode(SKUCode);
    let index = this.items.indexOf(itemToDelete);
    this.items.splice(index, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(SKUCode) {
    let item = this.items.findItemBySKUCode(SKUCode);

    return {
      itemInfo() {
        for (let [key, value] of Object.entries(item)) {
          console.log(`${key}: ${value}`);
        }
      }
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(", "));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10