let txt = "This sentence has hello world in it hello";

let regex1 = /hello/; //more common to write like this
let regex2 = /worlds/;

console.log(regex1.exec(txt)); // exec returns amount of matches
console.log(regex2.exec(txt));