let txt = "This sentence has hello world in it";

let regex1 = new RegExp("hello");
let regex2 = /worlds/;

console.log(regex1.test(txt));
console.log(regex2.test(txt));