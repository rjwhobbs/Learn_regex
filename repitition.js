// + Matches 1 or more occurrences
// * Matches 0 or more occurrences
// ? Matches 0 or one occurrence

let txt = "SHe sells seashells on a seashore. The shells she sells are seashells,\nI'm sure.";
let txt2 = "Joe Frank Lisa jill P apple apples appless"; // Still matches appless because of apples in the word
let reg1 = /[A-Z]?/g;
let reg2 = /s[a-z]+/g; // this is called being greedy
let reg3 = /s[a-z]?/g; 
let reg4 = /s[a-z]*/g; 
let reg5 = /[A-Z][a-z]+/g; 
let reg6 = /ap+les?/g; 

// console.log(txt.match(reg2));
// console.log(txt.match(reg3));
// console.log(txt.match(reg4));
// console.log(txt2.match(reg5));
console.log(txt2.match(reg6));
// console.log(txt.match(reg1)); 
// There are 0 occurences so it returns that 0 occurence
/* [
    'S', 'H', '', '', '', '', '', '', '', '', '', '',
    '',  '',  '', '', '', '', '', '', '', '', '', '',
    '',  '',  '', '', '', '', '', '', '', '', '', 'T',
    '',  '',  '', '', '', '', '', '', '', '', '', '',
    '',  '',  '', '', '', '', '', '', '', '', '', '',
    '',  '',  '', '', '', '', '', '', '', '', '', 'I',
    '',  '',  '', '', '', '', '', '', ''
  ] */ 