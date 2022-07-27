//1
/*
When we say that classes are first-class values or citizens, we mean that we
can pass classes as arguments to functions, return them from functions, assign
them to variables or use them anywhere a value is expected.
*/

//2
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}

/*
The `static` modifier adds the following method or property as a static method/
property to the `Television` function object. This means that we can invoke
`manufacturer` directly on `Television` like so: `Television.manufacturer`.
Methods of a constructor fuction or a class that are created in the function
itself and not in its `prototype` property, are called static methods.
Such methods contain functionality regarding the type of the object that the
function creates (e.g. televisions) and are not accessible from the instances
that will be created from it.
*/