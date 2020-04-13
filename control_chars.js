let txt = "hot h t h\tt hit h\nt h\tt";
let re1 = /h\tt/g;
let re2 = /h\nt/g;

console.log(txt.match(re1));
console.log(txt.match(re2));