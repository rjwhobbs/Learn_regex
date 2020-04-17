// \u0065 = 'e'; hex num
// You can use unicode equavalent or the actuall symbol
// \u{1D11E} (ES6 above) to use extended unicode = 𝄞 (treble clef)

let txt = "𝄞-clef";
let reg1 = /^.-clef/u; // Unicode flag
let reg2 = /\u{1D11E}/u; // Unicode flag

console.log(reg1.test(txt));
console.log(reg2.test(txt));