class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${"-".repeat(this.message.length + 2)}+`;
  }

  emptyLine() {
    return `|${" ".repeat(this.message.length + 2)}|`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

//Further exploration

class Banner {
  constructor(message, maxWidth) {
    this.message = message;
    this.maxWidth = maxWidth >= this.message.length + 4 && maxWidth <= 120 ?
      maxWidth : this.message.length + 4;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${"-".repeat(this.maxWidth - 2)}+`;
  }

  emptyLine() {
    return `|${" ".repeat(this.maxWidth - 2)}|`;
  }

  messageLine() {
    let [leftPad, rightPad] = [1, 1];

    if (this.maxWidth > this.message.length + 4) {
      let totalPad = this.maxWidth - (this.message.length + 2);
      leftPad = Math.floor(totalPad / 2);
      rightPad = Math.ceil(totalPad / 2);
      console.log(this.message.length, totalPad, leftPad, rightPad);
    }
    return `|${" ".repeat(leftPad)}${this.message}${" ".repeat(rightPad)}|`;
  }
}

let banner3 = new Banner('To boldly go where no one has gone before.', 130);
banner3.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner4 = new Banner('', 120);
banner4.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+