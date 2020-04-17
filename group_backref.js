// NB Groups capture text

let reg1 = /([a-f][1-5])\1/;
let reg2 = /<(\w+>)[\w\s]+<\/\1/g; // /<(\w+>)[\w\s]+</\1/g; This is the actual regex but because of the way js parses regex we need to escape the 3rd last '/' 


let txt = "a1d2f3f4";
let txt2 = "a1a1f3f4";
let txt3 = "<p>hthththt</p><a>ijwgri</a>";

console.log(txt.match(reg1)); // No match
console.log(txt2.match(reg1)); // match, only 'a1' in group capture
console.log(txt3.match(reg2)); 