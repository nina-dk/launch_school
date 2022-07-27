let x = "5"
x = x + 1
//=> "51"

let y = "5"
y++
//=> 5
//Because the postfix increment operator first coeres its operand to a number
//increments it by one, and returns the value of the operand before incrementing.
//If we
console.log(y)
//afterwards, it will log: 6.