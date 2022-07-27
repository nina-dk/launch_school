function myBind(func, context, ...boundArgs) {
  return function() {
    return func.call(context, ...boundArgs, ...arguments);
  };
}

let foo = {
  name: "foo"
};

function logName(arg) {
  console.log(arg + " " + this.name);
}

logName("name:"); // name: undefined
let boundLogName = myBind(logName, foo, "name:");
boundLogName("my name:"); // name: foo