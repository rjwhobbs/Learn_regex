/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];
let newData = [];
let regex = /(\b\w+\b)(\W+)(\b\w+\b)/;
let temp = "";

let i = 0;
let len = data.length;
while (i < len) {
    temp = data[i].match(regex)[3];
    temp += data[i].match(regex)[2];
    temp += data[i].match(regex)[1];
    newData.push(temp);
    i++;
}

console.log(newData);
