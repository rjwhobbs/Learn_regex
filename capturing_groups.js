let reg1 = /(yo)\1/g; // The \1 refers to the first group, it is not refering the pattern
let reg2 = /^(\d\d\d\d)[-./](\d{1,2})[-./]\2$/; // Now we're saying refer to the text in the 2nd group
let reg3 = /^(\d\d\d\d)([-./])(\d{1,2})\2(\d{1,2})$/; // More useful group capturing
let reg4 = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/; // Non capturing group add '?:' note the index change for capture number

let txt = "2017-9-1";
let txt2 = "2017-9-9";

console.log(txt.match(reg2)); // no match
console.log(txt2.match(reg2)); // match and you only get 2 groups in you 'split'
/*
[
  '2017-9-9',
  '2017',
  '9',
  index: 0,
  input: '2017-9-9',
  groups: undefined
]
*/
console.log(txt.match(reg3));
console.log(txt.match(reg4));
