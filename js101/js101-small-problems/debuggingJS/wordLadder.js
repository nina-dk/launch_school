let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

//TypeError: Cannot read property 'forEach' of undefined

/*
This is because after declaring the variable `ladder` on line 1,
and initializing it to the string `''` there is no semicolon terminating
that statement. When a semi-colon is missed, JavaScript performs Automatic
Semicolon Insertion which might not always produce the expected results.
In this case, JavaScript parses the first 9 lines like so:
let ladder = ''['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

That is, it treats the array on line 3, as an accessor to the empty string.
Because there's no such property in the string, the expression
`''['head', 'heal', 'teal', 'tell', 'tall', 'tail']` evaluates to `undefined`
which is what `forEach` is called on. Thus, `forEach` throws a `TypeError`.
*/