let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

//Snippet 1

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//Snippet 2

for (let key in myObj) {
  console.log(key);
}

/* The first snippet will only log qux, as the .keys method does not take
the prototype object's properties into account. The second snippet, however,
will log both the own-keys and the inherited keys:
qux
foo
bar */