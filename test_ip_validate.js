let regex = /^(?:2(?:[0-4]\d|[5][0-5])|1\d\d|\d\d|\d)$/;

let i = 0; 
let temp = "";

while (i < 256) {
    temp = parseInt(i);
    console.log(regex.test(temp), temp);
    i++;
}
// 40 chars is the smmallest solution?
let ipValidate =/^(?:2(?:[0-4]\d|[5][0-5])|1\d\d|\d\d|\d)\.(?:2(?:[0-4]\d|[5][0-5])|1\d\d|\d\d|\d)\.(?:2(?:[0-4]\d|[5][0-5])|1\d\d|\d\d|\d)\.(?:2(?:[0-4]\d|[5][0-5])|1\d\d|\d\d|\d)$/;
