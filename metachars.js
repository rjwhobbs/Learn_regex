// regex is a pattern of chars, not words
// think of strcmp and other low level str funcs

// ^ $ . * + ? = ! : \ / () [] {}

// Escaping meta chars

let re1 = /s\./g;
let re2 = /s\@/g; // @ is not a meta char
let re3 = /s\\/g; 
// "\" Simply says use the literal value that follows

let txt = "Some words on the screens. s. s@ s\\";

console.log(txt.match(re1));
console.log(txt.match(re2));
console.log(txt.match(re3));




