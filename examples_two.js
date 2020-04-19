// Matching words that are close together

let txt = "Let's put several words together ans see what we can match";
let reg_one = /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/