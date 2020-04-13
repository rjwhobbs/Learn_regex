// g - global match more than one occurance
// i - case insentivity
// m - multi line match

let txt = "This sentence has hello world in it. hellohelloS ";

let regex1 = /s\s/gi; // s followed by space globaly
let regex2 = /worlds/;
;

// console.log(txt.match(regex1));
console.log(regex1.exec(txt)); // With -g exec() finds the next index when it is invoked
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));