/*
Algo:
Keep the running total in a property of the calculator object
Initially, runningTotal is 0

When we click on a digit
  1. If the entryWindow's value is 0, reset it to that digit.
  2. If it's not zero, append that digit to the existing number.

Whenever we click on an operator
  1. If there's already a value in the operationWindow (it's not empty)
    i. Perform the PREVIOUS operation on the runningTotal and the number currently
       in the entry window.
    ii. Update the runningTotal to the new value calculated.
    iii. Display the runningTotal in the entryWindow.
  2. OTHERWISE, if runningTotal is 0, reassign it to the number in entryWindow.
  3. Add the runningTotal (current number in entryWindow) followed by the operator in the
     operation window.
  4. Reassign currentOperation to the clicked operator.

When we click "="
  1. If currentOperation holds an operator
    i. Perform that operation on the runningTotal and the number in entryWindow.
    ii. Reassign runningTotal to the result.
    iii. Update the entryWindow to display the runningTotal.
  2. Empty the operationWindow.
*/

class Calculator {
  static OPERATORS = ["/", "x", "-", "+", "%"];
  static NUMBERS = "0123456789";
  static ACTIONS = ["C", "CE", "NEG", ".", "="];

  constructor() {
    this.entryWindow = $("#entry-win");
    this.operationWindow = $("#operation-win");
    this.buttonContainer = $(".buttons-container");
    this.runningTotal = 0;
    this.currentOperation = null;
    this.lastValue = null;
    this.bindEvents();
  }

  bindEvents() {
    this.buttonContainer.on("click", "button", this.handleClick.bind(this));
    $(document.body).on("keydown", this.handleKeyStroke.bind(this));
  }

  handleKeyStroke(e) {
    e.preventDefault();
    let key = e.key;

    if (key === "Enter") this.performAction("=");
    else if (key === "Escape") this.performAction("CE");
    else this.userInteraction(key);
  }

  handleClick(e) {
    let clicked = $(e.target).text();
    this.userInteraction(clicked);
  }

  userInteraction(value) {
    if (Calculator.OPERATORS.includes(value)) this.operatorSelection(value);
    else if (Calculator.NUMBERS.includes(value)) this.numberSelection(value);
    else if (Calculator.ACTIONS.includes(value)) this.performAction(value);
    else return;

    this.lastValue = value;
  }

  operatorSelection(operator) {
    if (this.currentOperation) {
      this.performOperation(this.currentOperation, +this.entryWindow.text());
      this.operationWindow.append(`${this.entryWindow.text()} ${operator} `);
    } else {
      if (this.runningTotal === 0 && this.currentOperation === null) {
        this.runningTotal = +this.entryWindow.text();
      }

      this.operationWindow.append(`${this.runningTotal} ${operator} `);
    }

    this.entryWindow.text(this.runningTotal);
    this.currentOperation = operator;
  }

  numberSelection(num) {
    let currentEntry = this.entryWindow.text();
    let latestEntry = currentEntry[currentEntry.length - 1];

    if (latestEntry !== this.lastValue) this.entryWindow.text(num);
    else this.entryWindow.append(num);
  }

  performAction(action) {
    switch (action) {
      case "=":
        if (this.currentOperation) {
          this.performOperation(this.currentOperation, +this.entryWindow.text());
          this.entryWindow.text(this.runningTotal);
          this.currentOperation = null;
        }

        this.operationWindow.text("");
        break;
      case ".":
        if (this.entryWindow.text().includes(".")) break;
        this.entryWindow.text(this.entryWindow.text() + ".");
        break;
      case "C":
        this.reset();
        break;
      case "CE":
        this.entryWindow.text("0");
        break;
      case "NEG":
        let currentStrNum = this.entryWindow.text();
        if (currentStrNum[0] !== "-" && currentStrNum !== "0") {
          this.entryWindow.text("-" + this.entryWindow.text());
        }

        break;
    }
  }

  performOperation(operator, num) {
    switch (operator) {
      case "/": this.runningTotal /= num; break;
      case "x": this.runningTotal *= num; break;
      case "-": this.runningTotal -= num; break;
      case "+": this.runningTotal += num; break;
      case "%": this.runningTotal %= num; break;
    }
  }

  reset() {
    this.runningTotal = 0;
    this.currentOperation = null;
    this.lastValue = null;
    this.operationWindow.text("");
    this.entryWindow.text("0");
  }
}

document.addEventListener("DOMContentLoaded", () => new Calculator());