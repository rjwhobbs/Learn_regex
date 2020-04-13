/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];
let newNums = [];

let re_one = /801-...-..../g;
let test;

let len = phoneNums.length;
let c = 0;
while (c < len) {
    test = phoneNums[c].match(re_one);
    if (test !== null) {
        newNums.push(test[0]);
    }
    c++;
}

console.log(newNums);
