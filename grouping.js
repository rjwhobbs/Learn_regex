// () to group expressions

let txt = "a1f3d2e3c1 aaa1d2e2f4";
let txt2 = "Tuesday tuesdays"

let reg1 = /([a-z][1-5]){5}/g; // this grouping must happen 5 time
let reg2 = /\bmonday|tuesday|wednesday\b/gi; // == \bmonday , tuesday , wednesday\b
let reg3 = /\b(monday|tuesday|wednesday)\b/gi; // == \bmonday\b etc

console.log(txt2.match(reg3));