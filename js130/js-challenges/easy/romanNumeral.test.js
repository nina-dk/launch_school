const { RomanNumeral } = require("./romanNumerals");

// eslint-disable-next-line max-lines-per-function
describe("RomanNumeral class", () => {
  test("zero is ignored", () => {
    let fiveTen = new RomanNumeral(510);
    expect(fiveTen.romanNumeral).toBe("DX");

    let oneTwoZeroThree = new RomanNumeral(1203);
    expect(oneTwoZeroThree.romanNumeral).toBe("MCCIII");

    let twoThousandSixteen = new RomanNumeral(2016);
    expect(twoThousandSixteen.romanNumeral).toBe("MMXVI");
  });

  test("0 is represented by the word 'nulla'", () => {
    let zero = new RomanNumeral(0);
    expect(zero.romanNumeral).toBe("nulla");
  });

  test("work for 1-4 digits-long numbers", () => {
    let seven = new RomanNumeral(7);
    expect(seven.romanNumeral).toBe("VII");
    let sixtyFour = new RomanNumeral(64);
    expect(sixtyFour.romanNumeral).toBe("LXIV");
    let fourFourEight = new RomanNumeral(448);
    expect(fourFourEight.romanNumeral).toBe("CDXLVIII");
    let oneEightFiveTwo = new RomanNumeral(1852);
    expect(oneEightFiveTwo.romanNumeral).toBe("MDCCCLII");
  });

  test("must cover numbers up to 3000", () => {
    let threeThousand = new RomanNumeral(3000);
    expect(threeThousand.romanNumeral).toBe("MMM");
  });

  test('1', () => {
    let number = new RomanNumeral(1);
    expect(number.romanNumeral).toBe('I');
  });

  test('2', () => {
    let number = new RomanNumeral(2);
    expect(number.romanNumeral).toBe('II');
  });

  test('3', () => {
    let number = new RomanNumeral(3);
    expect(number.romanNumeral).toBe('III');
  });

  test('4', () => {
    let number = new RomanNumeral(4);
    expect(number.romanNumeral).toBe('IV');
  });

  test('5', () => {
    let number = new RomanNumeral(5);
    expect(number.romanNumeral).toBe('V');
  });

  test('6', () => {
    let number = new RomanNumeral(6);
    expect(number.romanNumeral).toBe('VI');
  });

  test('9', () => {
    let number = new RomanNumeral(9);
    expect(number.romanNumeral).toBe('IX');
  });

  test('27', () => {
    let number = new RomanNumeral(27);
    expect(number.romanNumeral).toBe('XXVII');
  });

  test('48', () => {
    let number = new RomanNumeral(48);
    expect(number.romanNumeral).toBe('XLVIII');
  });

  test('59', () => {
    let number = new RomanNumeral(59);
    expect(number.romanNumeral).toBe('LIX');
  });

  test('93', () => {
    let number = new RomanNumeral(93);
    expect(number.romanNumeral).toBe('XCIII');
  });

  test('141', () => {
    let number = new RomanNumeral(141);
    expect(number.romanNumeral).toBe('CXLI');
  });

  test('163', () => {
    let number = new RomanNumeral(163);
    expect(number.romanNumeral).toBe('CLXIII');
  });

  test('402', () => {
    let number = new RomanNumeral(402);
    expect(number.romanNumeral).toBe('CDII');
  });

  test('575', () => {
    let number = new RomanNumeral(575);
    expect(number.romanNumeral).toBe('DLXXV');
  });

  test('911', () => {
    let number = new RomanNumeral(911);
    expect(number.romanNumeral).toBe('CMXI');
  });

  test('1024', () => {
    let number = new RomanNumeral(1024);
    expect(number.romanNumeral).toBe('MXXIV');
  });
});