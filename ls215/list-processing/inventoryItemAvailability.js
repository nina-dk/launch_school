/*
Inputs: id (number), array of objects
Output: boolean
Rules:
  -return `true` if the sum of the quantities for that item is > 0
  -if the `movement` prop of an object is "out", decrease the total quantity
    of this item by the `quantity` prop in that object
Algorithm:
  -get an array of all the objects for that item (use function from previous exercise)
  -
*/

const { transactionsFor } = require("./inventoryItemTransactions");
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(id, transactions) {
  let itemTrans = transactionsFor(id, transactions);
  let totalQuantity = itemTrans.reduce((totalQuantity, { movement, quantity }) => {
    return totalQuantity + (movement === "out" ? -quantity : quantity);
  }, 0);

  return totalQuantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true