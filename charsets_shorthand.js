// \d (digits) = [0-9]
// \w (word) = [a-zA-Z0-9_]
// \s (space) = [ \t\n\r] // There's a space after the '['

// \D = [^0-9]
// \W = [^a-zA-Z]
// \S = [^ \t\n\r]

let reg1 = /\d/g;
let reg2 = /\w/g;
let reg3 = /\s/g;
let reg4 = /\D/g;
let reg5 = /\W/g;
let reg6 = /\S/g;

let txt = "this sentence \t\r \n (123457890) YOO!!!!.";

// console.log(txt.match(reg1));
// console.log(txt.match(reg2));
// console.log(txt.match(reg3));
console.log(txt.match(reg4));
console.log(txt.match(reg5));
console.log(txt.match(reg6));

let reg7 = /\w\w\w/g;
let txt2 = "He is holding his hat in his hand." // So it seems once a match/pattern is found the next search 
// starts off at the very next index after the end of the previous match

console.log(txt2.match(reg7)); // = [ 'hol', 'din', 'his', 'hat', 'his', 'han' ]