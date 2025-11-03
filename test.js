const { mergeTimeRanges } = require('./my-module');

// Example 1
console.log(mergeTimeRanges([
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
], 200));
// → [ [1000, 2000], [2500, 4100], [8000, 9500] ]

// Example 2
console.log(mergeTimeRanges([
  [0, 10],
  [15, 20],
  [25, 30]
], 4));
// → [ [0, 10], [15, 20], [25, 30] ]

// Example 3
console.log(mergeTimeRanges([
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
], 3));
// → [ [0, 35] ]
