/*
Inputs: number and array of objects (`transactions`)
Output: new array of objects
Rules:
  Explicit requirements:
    -output array must only contain the objects with the specified number
     as their `id`
  Implicit requirements:
    -input number corresponds to the value of the key `id` in the nested objects
Data structures:
  array
Algorithm:
  1.Create an empty array `stock`.
  2.Create a variable `i` equal to 0.
  3.If the value of the `id` key of the element at index `i` in `transactions`
    equals the input number, push that element in `stock`.
  4.Increment `i`.
  5.Repeat steps 3-4 for each element in `transactions`.
  6.Return `stock`.
*/

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

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(item => item.id === inventoryItem);
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 } ]