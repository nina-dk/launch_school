function forEach(arr, callback, thisArg) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    callback.call(thisArg, arr[idx], idx, arr);
  }
}

//Tests

forEach([1, 2, 3], num => console.log(num));

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem); // error