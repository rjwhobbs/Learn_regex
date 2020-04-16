/*
The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
*/

let text1 = 'Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.';

// Monday ,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
let regEx = /\b[MTWFS]\w{2,5}day\b/g;
let solution = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi;

console.log(text1.replace(regEx, "Monday"));
console.log(text1.replace(regEx, "Monday") == text1.replace(solution, "Monday"));