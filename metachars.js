// regex is a pattern of chars, not words
// think of strcmp and other low level str funcs

// ^ $ . * + ? = ! : \ / () [] {}

// Escaping meta chars

let re1 = /s\./g;

let txt = "Some words on the screens. s."

console.log(txt.match(re1));