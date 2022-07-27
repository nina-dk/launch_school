//for each object in the array
//we want to mututate the object by changing the value of the `name` and
//`country` prorties

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function fixBandName(name) {
  return name.replaceAll(".", "")
             .split(" ")
             .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
             .join(" ");
}

function processBands(data) {
  return data.map(band => {
    return {
      name: fixBandName(band.name),
      country: "Canada",
      active: band.active
    };
  });
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]