const { log } = require('console');
const fs = require('fs');
// const input =fs.readFileSync(0, 'utf-8').trim().split(" ");
// const input =fs.readFileSync(0, 'utf-8').trim().split("\n");

// const input = fs.readFileSync("./input2.txt").toString().trim().split(" ");
const input = fs.readFileSync("./input2.txt").toString().trim().split("\r\n");

const matrix = input.map((line) => line.split(" ").map(Number));

console.log(matrix);
// [ [ 260000 ], [ 4 ], [ 20000, 5 ], [ 30000, 2 ], [ 10000, 6 ], [ 5000, 8 ] ]

let total = matrix[0];
let itemType = matrix[1];
let result = 0;

for (let i = 0; i < itemType; i++) {
  result = result + matrix[i + 2][0] * matrix[i + 2][1];
}

result == total ? console.log("Yes") : console.log("No");