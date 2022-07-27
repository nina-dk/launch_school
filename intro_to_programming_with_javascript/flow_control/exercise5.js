// return foo() ? 'bar' : qux();

// Refactored

if (foo()) {
  return 'bar';
} else {
  return qux();
}