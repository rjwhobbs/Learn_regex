/*
Iterate over each match and log the information to the console.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.";

let regex = /\d+/g,
    match = null;

while (match = regex.exec(phrase)) {
    console.log(regex.lastIndex);
    if (match.index == regex.lastIndex) regex.lastIndex++;
    console.log(match);
    console.log(regex.lastIndex);
}

// Last index is also available on test
// Lastindex is used if an expression returns a zero lengthed match
// eg, if the regex was d* a zero match would return something but it would be zero lengthed

let txt = "qwrqwr qwrwer ttt";
let reg_two = /d*/g;

console.log(reg_two.exec(txt)); // This returns something but it is empty
console.log(reg_two.lastIndex); // you can use lastindex to move through your string, escencially