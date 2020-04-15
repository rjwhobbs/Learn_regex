// ^ Anchors at start of line
// $ Anchors to the end of line

let txt = "The Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended life forms are so amazingly primitive that they still think digital \nThe watches are a pretty neat idea."
let txt2 = "idea.";

let reg1 = /^The/gm; // 'm' acounts for new lines with ^ or $
let reg2 = /idea.$/g;
let reg3 = /^idea.$/; // This is saying this has to be the only thing in the string, adding a \n would break this

console.log(txt.match(reg1));
console.log(txt.match(reg2));
console.log(txt2.match(reg3));

// m kind of says let the \n be the end of the string, not a char to account for