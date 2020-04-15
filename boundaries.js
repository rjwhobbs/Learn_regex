// \b Word boundary Pattern bounded by a non-word char (word chars are \w)
// \B Nonword boundary Pattern bounded by a word char
// These reference positions

let txt = "Implant plan planet xplan +plan"; // Syms are non-word chars.
let reg1 = /\bplan\b/g;
let reg2 = /\Bplan\b/g;

console.log(txt.match(reg1));
console.log(txt.match(reg2));