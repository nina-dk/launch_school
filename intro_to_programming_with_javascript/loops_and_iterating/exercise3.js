let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* The above code causes an infinite loop because on line 3, inside the
condition of the loop, the expression: counter = 1, is actually a 
(re)assignment of the value of counter to be equal to 1. That will always
evaluate to true since it's a truthy expression, and so the loop will never
stop looping. In addition, the condition on line 7 will never be met
because counter is reassinged to 1 after each iteration, then incremented
by 1, so counter = 2, which is not > 2, then set to 1 again and so on. */