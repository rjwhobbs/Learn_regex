// {min, max} Match min max occurences
// {min} this amount
// {min,} this amount and more

let txt = "this is my number : 123-765-4321";
let txt2 = "#ff0000 #C0C0C0 these are hex nums";
let txt3 = "345-77-0987";
let reg1 = /\w{3,5}/g;
let reg2 = /\w\w{3,5}/g;
let reg3 = /\w{3,}/g;
let reg4 = /\w{3,6}/g;
let reg5 = /[0-9A-F]{6}/gi;
let reg6 = /\d{3}-\d{2}-\d{4}/g; // Rep amount just make your regex easier to read

console.log(txt.match(reg1));
console.log(txt.match(reg2));
console.log(txt.match(reg3));
console.log(txt.match(reg4));
console.log(txt2.match(reg5));
console.log(txt3.match(reg6));