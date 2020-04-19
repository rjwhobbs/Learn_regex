// \b Word boundary Pattern bounded by a non-word char (word chars are \w)
// \B Nonword boundary Pattern bounded by a word char
// These reference positions

let txt = "Implant plan planet xplan +plan"; // Syms are non-word chars.
let reg1 = /\bplan\b/g;
let reg2 = /\Bplan\b/g;

console.log(txt.match(reg1));
console.log(txt.match(reg2));

// \b Boundary doesn't make the regex engine andvance through the string?
// \b is a zero length token so in txt it will not match 'I' with \b so it will check the void
// byte (I guess) and \b will match that, then it will check the next token 'p', that doesn't match either
// https://www.regular-expressions.info/wordboundaries.html
