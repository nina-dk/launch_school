class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/*
ByeBye
HelloHello

On line 16, we invoke the static method `dupData` directly on the `Something`
class which returns the string `ByeBye`. On line 17, we invoke the instance
method `dupData` on `thing` which is an instance of `Something`, which returns
the string `HelloHello`.
*/