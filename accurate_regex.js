// Just because your test works still make sure that it is 100% accurate
// Where possible be specific with your ranges
// Provide clear starting and ending points

let txt = "88453-3243";
let regEx = /^\d{5}-\d{4}$/;

console.log(txt.match(regEx));