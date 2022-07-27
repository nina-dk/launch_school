function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* It will log: Product2
                Product 3
                Product not found!
because we didn't add a break statement in each case. So since case '113'
evaluates to true, the code in every case clause after that gets executed
as well. */