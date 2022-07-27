"use strict";

let Account = {
  // eslint-disable-next-line max-lines-per-function
  init(email, password, firstName, lastName) {

    function anonymize() {
      let nums = "0123456789";
      let letters = "abcdefghijklmnopqrstuvwxyz";
      let chars = nums + letters.toUpperCase() + letters;
      let displayName = "";
      while (displayName.length < 16) {
        let randomIdx = Math.floor(Math.random() * chars.length);
        displayName += chars[randomIdx];
      }

      return displayName;
    }

    this.displayName = anonymize();
    this.firstName = function(pass) {
      if (pass === password) return firstName;
      else return "Invalid Password";
    };
    this.lastName = function(pass) {
      if (pass === password) return lastName;
      else return "Invalid Password";
    };
    this.email = function(pass) {
      if (pass === password) return email;
      else return "Invalid Password";
    };
    this.resetPassword = function(pass, newPass) {
      if (pass === password) {
        password = newPass;
        return true;
      } else return "Invalid Password";
    };
    this.reanonymize = function(pass) {
      if (pass === password) {
        this.displayName = anonymize();
        return true;
      } else return "Invalid Password";
    };

    return this;
  }
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));                  // logs 'foo'
console.log(bazQux.displayName);                       // logs 16 character sequence
console.log(bazQux.resetPassword('123', 'qwerty'));    // logs 'Invalid Password'
console.log(bazQux.resetPassword('123456', 'qwerty')); // logs true
console.log(bazQux.lastName("qwerty"));                // logs 'qux'