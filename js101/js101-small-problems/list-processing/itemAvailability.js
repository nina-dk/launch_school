/*
Inputs: number and array of objects
Output: boolean (true/false)
Rules:
  Explicit requirements:
    -an inventory item is available when the sum of the quantity values of its
     transactions is > 0
    -if the value of the movement property is 'out' the quantity of that item
     will be decreased
    -use `transactionsFor` function from previous exercise
  Implicit requirements:
    -if the sum of an item's quantities is <= 0, return false
Questions:
  -how much will the quantity of an item decrease if that item's movement value
   is 'out'?
    assumption: subtract the quantity of that item from the sum
Data structures:
Algorithm:
  1.Get the transactions of the specified item using the `transactionsFor`
    function and save them in an array `itemTransactions`.
  2.Create variables `i` and `count` and set their value to 0.
  3.If the element at index `i` in `itemTransactions` has the value 'in'
    in the property `movement` add the value of its quantity key to `count`.
    Otherwise, decrement `count` by that value.
  4.Increment `i`.
  5.Repeat steps 3-4 for each element in `itemTransactions`.
  6.Return if `count` is positive.
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(item => item.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  const itemTransactions = transactionsFor(inventoryItem, transactions);
  let quantity = 0;

  itemTransactions.forEach(trans => {
    trans.movement === "in" ? quantity += trans.quantity : quantity -= trans.quantity;
  });

  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 } ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true