// + Matches 1 or more occurrences
// ? Matches 0 or one occurrences
// * Matches 0 or more occurrences

let txt = "SHe sells seashells on a seashore. The shells she sells are seashells,\nI'm sure.";
let reg1 = /[A-Z]?/g;
let reg2 = /s[a-z]+/g; // this is called being greedy

console.log(txt.match(reg2));
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