/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen,", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];
let newData = [];
let regex = /(\w+)(\W+)(\w+)/; // Beware of 'g' flag here as this sets a static index counter for exec

newData = data.map(item => {
    let arr = regex.exec(item);
    if (arr !== null) {
        return arr[3] + arr[2] + arr[1];
    } else {
        return null;
    }
});

console.log(newData);