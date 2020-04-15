/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

const input = document.getElementById('phone');

input.addEventListener('change', (e) => {
    let num = e.target.value;
    let regEx = /[(]?\d{3}[)-]?[-.]?\d{3}[-.]?\d{4}/g;
    if (regEx.test(num) === true) {
        input.className = "green";
    } else {
        input.className = "red";
    }
});

