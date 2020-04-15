let txt = "32-6678, 45-668778, 65-454"
let txt2 = "32-6678-1, 45-668778-1, 65-454"
let reg1 = /\d{2}-\d{4,6}?/g; //The ? makes it lazy and forces it to go with the min amount
let reg2 = /\d{2}-\d{4,6}?-/g; // Even though it is forced to be lazy it will try find the next char
// if the other chars fit in the min max

console.log(txt.match(reg1)); //[ '32-6678', '45-6687' ]
console.log(txt2.match(reg2)); //[ '32-6678-', '45-668778-' ]