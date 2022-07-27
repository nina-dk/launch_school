/*
`Robot` class
`names` static property
  includes all of the existing robot names
`constructor` method
  input: -
  output: Robot object
`name` instance method
  input: -
  output: string (name of the robot)
  rules:
    -generate a RANDOM name
    -names are comprised of two uppercase letters followed by 3 digits
    -if generated name already exists in `names`, generate another one
    -if the robot already has a name, return that name
  algorithm:
    -create a collection of the alphabet letters in uppercase
    -create a collection of the digits 0-9
    -declare a `robotName` variable and set it to a string
    -while `robotName`'s length is < 2
      -append the letter from the collection at `randomIndex` to it
    -while `robotName`'s length < 5
      -append the digit at index `randomIndex` from the digits collection
    -if the `names` collection includes `robotName`
      -do that again
    -else push it in `names` and return it
`randomIndex` instance method
  input: length of the collection (number)
  ouput: index (number)
  algorithm:
    -return a random number in the range of 0-input length
`reset` instance method
*/

class Robot {
  static names = [];

  name() {
    if (!this.robotName) {
      const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const DIGITS = "0123456789";
      let robotName = "";

      for (let i = 0; i < 5; i += 1) {
        robotName += i < 2 ?
          ALPHABET[this._randomIndex(ALPHABET.length)] :
          DIGITS[this._randomIndex(DIGITS.length)];
      }

      Robot.names.includes(robotName) ? this.name() :
        Robot.names.push(robotName);

      this.robotName = robotName;
    }

    return this.robotName;
  }

  reset() {
    Robot.names.splice(Robot.names.indexOf(this.robotName), 1);
    this.robotName = null;
  }

  _randomIndex(range) {
    return Math.floor(Math.random() * range);
  }
}

module.exports.Robot = Robot;