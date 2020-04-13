// Charecter sets

let txt = "greyc or gray won't find greay c c grey.";
let reg_one = /gr[ae]y/g; // Match only ONE of these chars inside the char set
// Be aware of the g flag
let reg_two = /[abcd]/g;
let reg_three = /[abcd][ dy]/g; // Matches only ONE char from the two combinations
console.log(txt.match(reg_one));
console.log(txt.match(reg_two));
console.log(txt.match(reg_three));

// NB meta char don't act as meta chars inside char sets
let reg_four = /gr[ae]y[ .]/g; // '.' not a wildcard here
console.log(txt.match(reg_four));