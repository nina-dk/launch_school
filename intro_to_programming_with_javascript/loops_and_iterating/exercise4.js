for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* logs 
   1
   2
   3
   4
   5
This code will not throw an error because the increment expression that's
missing is optional, and in this case, i is being incremented inside the
loop instead. */