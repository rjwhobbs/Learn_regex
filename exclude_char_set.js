// Exculded chars, use '^' symbol
// only use at begining of char set

let reg_one = /0x[^0-9A-F][0-9A-F]/g; // Include everything except the ones preceded buy ^
let reg_two = /[\^0-9A-F][^0-9A-F]/g; // escaped

let txt = "0x!F89F";
let txt_two = "abcdefghijklmnop^qrst";
console.log(txt_two.match(reg_two));
