/*
Count the number of different bases across two strings of bases
If one string is shorter than the other, compute the differences up to
its length

Algorithm:
  -Declare a `count` variable
  -If input strings are of equal lengths
    -For each char in first string
      -if it's not equal to the char at the same index in the 2nd string
        -increment `count` by 1
  -Else
    -For each char in the shorter string
      -do the same as above
  -Return `count`
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand) {
    let [strand1, strand2] = (strand.length >= this.strand.length) ?
      [this.strand, strand] : [strand, this.strand];

    let count = 0;
    strand1.split("").forEach((base, idx) => {
      if (strand2[idx] !== base) count += 1;
    });

    return count;
  }
}

module.exports.DNA = DNA;

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^