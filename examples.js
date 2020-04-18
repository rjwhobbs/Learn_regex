// email

let reg1 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/; // Basic email reg

// With passwords one can make multiple seperate regex's

//Tricks with replace

let arr = ["Swap me", "And this"];

let newArr = arr.map(val => {
    return val.replace(/(\w+)\s+(\w+)/, "$2 *** $1");
});

let reg_two = /^(2[5][0-5]|2[0-4]\d|1\d\d|\d\d|\d)$/;
let reg_three = /^(2([5][0-5]|[0-4]\d)|1\d\d|\d\d|\d)$/;
let result = false;

let i = -1000;
while (i <= 1000) {
    let num = i.toString();
    let test = reg_three.test(num);
    if ((i < 0 || i > 255) && test === true) {
        console.log("Limit error (-1000 - 1000): i = ", i,"String: ", test);
        result = false;
    } else if ((i >= 0 && i < 256) && test === false) {
        console.log("False result: i = ", i, "String ", num);
        result = false;
    } else {
        result = true;
    }
    i++;
}

if (result === true) {
    console.log("Pass");
}

