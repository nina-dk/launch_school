let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    this.price -= discount;

    return this.price;
  },
};

console.log(item.discount(20));   // should return 40
//40

console.log(item.discount(50));   // should return 25
//20
console.log(item.discount(25));  // should return 37.5
//15

/*
Because every time `discount` is invoked, the `price` property in `item`
is mutated. Therefore, on each subsequent method invocation it has a different
value. To fix this we can instead return the result of the subtraction without
mutating the object:
*/

...
discount: function(percent) {
  let discount = this.price * percent / 100;

  return this.price - discount;
}
...