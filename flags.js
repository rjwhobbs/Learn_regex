// g - global match more than one occurance
// i - case insentivity
// m - multi line match

let txt = "This sentence has hello world in it. hellohelloS ";

let regex1 = /s\s/gi; // s followed by space globaly
let regex2 = /worlds/;
;

console.log(txt.match(regex1));