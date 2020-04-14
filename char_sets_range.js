// Char sets with range '-'

let reg_one = /[1\-4]/g; //Here '-' is a  meta char (escaped)
let reg_two = /[-.]/g; //Here '-' is a  meta char, but only works if the engine doesn't think it is in a range

let txt = "12340-";
console.log(txt.match(reg_one));
console.log(txt.match(reg_two));

let reg_three = /[1-7][1-6]/g; 
let txt_two = "There 1 - 5 ! 42 $Z^,.]";
let reg_four = /[1-7a-z\\-^]/g; // Appears ranges works on ascii values
let reg_five = /[\0-~]/g; // Yup looks like ranges inside char sets use ascii for ranges, zero (null byte) is special, therefore escaping it gives the literal value
let reg_six = /[13-5]/g; // this is not 13 to 5 it's the chars 3 to 5
let reg_seven = /[,-/]/g; 

let txt_three = "13 - 20: 10 13 16 9 23 34 ";
let reg_eight = /[1-2][0-9]/g; 
console.log(txt_three.match(reg_eight));
//NB char sets only match one char from the set