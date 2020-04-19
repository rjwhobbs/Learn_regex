/*
Retrieve the starting index for the match, the length of the match and the actual match.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.",
    matchstart,
    matchlength,
    match;

let reg = /\d+/g; //Using the static counter for exec with 'g'

let result;

while (result = reg.exec(phrase)) {
    matchstart = result.index;
    matchlength = result[0].length;
    match = result[0];
    console.log(matchstart, matchlength, match);
}
