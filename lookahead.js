// ?= lookahead group
// Lookahead groups don't consume any chars but they help make the match

let data = "things.com youtube.com potato.com";
let reg1 = /\w+(?=\.com)/g; // This is saying match all words that end in '.com' but don't include the '.com'
let reg2 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/ // A password regex. NB the positive lookaheads don't consume chars.
// Hence we say '.*[A-Z]' it could contain atleast one uppercase char preceeded by any char 0 or more times
let data2 = "Aa1ccccc";

let arr = data.match(reg1);
console.log(arr); // [ 'things', 'youtube', 'potato' ]
console.log(reg2.test(data2)); // true

// ?! negative lookahead
let data3 = "Aaxccccc";
let reg3 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$/ // This string must NOT contain a number
console.log(reg3.test(data3)); // True