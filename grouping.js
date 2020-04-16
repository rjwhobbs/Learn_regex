// () to group expressions

let txt = "a1f3d2e3c1 aaa1d2e2f4";
let txt2 = "Tuesday tuesdays";
let txt3 = "2020/03/06";

let reg1 = /([a-z][1-5]){5}/g; // this grouping must happen 5 times
let reg2 = /\bmonday|tuesday|wednesday\b/gi; // == \bmonday , tuesday , wednesday\b
let reg3 = /\b(monday|tuesday|wednesday)\b/gi; // == \bmonday\b etc

console.log(txt2.match(reg3));

//grouping in js () also know as capturing groups
let reg4 = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/
let arr = reg4.exec(txt3);
console.log(arr);
/* [
  '2020/03/06',
  '2020',
  '03',
  '06',
  index: 0,
  input: '2020/03/06',
  groups: undefined
] */

console.log(arr[1], arr[2], arr[3]);
