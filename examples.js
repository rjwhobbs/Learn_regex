// email

let reg1 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/; // Basic email reg

// With passwords one can make multiple seperate regex's

//Tricks with replace

let arr = ["Swap me", "And this"];

let newArr = arr.map(val => {
    return val.replace(/(\w+)\s+(\w+)/, "$2 *** $1");
});

let reg2 = /^(2[5][0-5]|2[0-4]\d|1\d\d|\d\d|\d)$/;

let i = 0;
while (i < 256) {
    let test = i.toString();
    console.log(reg2.test(test), test);
    i++;
}

