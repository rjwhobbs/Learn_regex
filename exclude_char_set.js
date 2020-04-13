// Exculded chars, use '^' symbol
// only use at begining of char set

let reg_one = /0x[^0-9A-F][0-9A-F]/g; // Include everything except the ones preceded buy ^

let txt = "0x!F89F";
console.log(txt.match(reg_one));
