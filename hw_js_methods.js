let txt = "This sentence has hello world in it. hellohello ";

let regex1 = /hello/; //more common to write like this
let regex2 = /worlds/;
let reSpace = /\s/;

// console.log(regex1.exec(txt)); // exec returns amount of matches
// console.log(regex2.exec(txt));

console.log(txt.match(regex1)); // this returns same thing as exec
console.log(txt.search(regex1)); // returns index of match only
console.log(txt.replace(regex1, 'hi')); // This replaces the match and returns a new string with the replacement
console.log(txt.split(regex1)); // Returns an array WITHOUT the match. Interestinly if there is another macth it returns an empty string. 
// Beware of empty string returns as this will affect the length of the array,
// Wether using a string literal or regex the result is the same.
console.log(txt.split(reSpace));
