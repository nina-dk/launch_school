$(() => {
  let form = $("form");
  form.on("submit", function(e) {
    e.preventDefault();
    let resultDisplay = $("#result");
    let firstNum = +$("input[name=firstNum]").val();
    let secondNum = +$("input[name=secondNum]").val();
    let operand = $("#operand").val();
    let result = 0;
    
    switch (operand) {
      case "+": result = firstNum + secondNum; break;
      case "-": result = firstNum - secondNum; break;
      case "*": result = firstNum * secondNum; break;
      case "/": result = firstNum / secondNum; break;
    }

    resultDisplay.text(result);
  });
});