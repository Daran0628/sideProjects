const { log } = require('console');
const fs = require('fs');
// const input =fs.readFileSync(0, 'utf-8').trim().split(" ");
// const input =fs.readFileSync(0, 'utf-8').trim().split("\n");

const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
// const input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");

// const matrix = input.map((line) => line.split(" ").map(Number));

// long int = 4bite , long long int = 8bite

let n = parseInt(input) / 4;
    n = Math.ceil(n);
let result = "";

    for(let i = 1; i <= n; i++){
        result += 'long ';
    }

console.log(result + 'int');