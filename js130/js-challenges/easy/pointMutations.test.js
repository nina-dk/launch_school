const { DNA } = require("./pointMutations");

// eslint-disable-next-line max-lines-per-function
describe("Calculate hamming distance", () => {
  test("hammingDistance() returns the number of bases that are different between two strands", () => {
    let dna = new DNA("GAGCCTACTAACGGGAT");
    expect(dna.hammingDistance("CATCGTAATGACGGCCT")).toBe(7);

    let dna2 = new DNA("AAACCCTAGGTTACAG");
    expect(dna2.hammingDistance("AAACCCTACGTTACAG")).toBe(1);

    let dna3 = new DNA("C");
    expect(dna3.hammingDistance("G")).toBe(1);
  });

  test("if one strand is shorter, calculate number of different bases till that point", () => {
    let dna = new DNA("GAGCCTACTAACGGGAT");
    expect(dna.hammingDistance("CATCGTAATGACG")).toBe(5);

    let shorterDNA = new DNA("GAGCCTACT");
    expect(shorterDNA.hammingDistance("CATCGTAATGACGGCCT")).toBe(4);

    let emptyDNA = new DNA("");
    expect(emptyDNA.hammingDistance("CATCGTAATGACGGCCT")).toBe(0);
  });

  test("empty strands have no differences", () => {
    let dna = new DNA("");
    expect(dna.hammingDistance("")).toBe(0);
  });

  test("same strands don't have any different bases", () => {
    let dna = new DNA("GAGCCTACTAACGGGAT");
    expect(dna.hammingDistance("GAGCCTACTAACGGGAT")).toBe(0);
  });
});