/*
Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.";

let reg_one = /(\d+)/g;

let arr = phrase.match(reg_one);
let len = arr.length;
let total = 0;
let i = 0;
while (i < len) {
    total += parseInt(arr[i++]);
}
console.log(total);