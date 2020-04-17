// email

let reg1 = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/; // Basic email reg

// With passwords one can make multiple seperate regex's

//Tricks with replace

let arr = ["Swap me", "And this"];

let newArr = arr.map(val => {
    return val.replace(/(\w+)\s+(\w+)/, "$2 *** $1");
});

console.log(newArr);