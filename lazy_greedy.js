// Greediness and making them lazy
 let txt = "<p>First</p> <p>second</p>"

 let reg1 = /<p>.*<\/p>/g; // '/' is a meta char. This is a greedy exp, it matches as much as it can. 
 //The engine will back track beacuse the greediness took everything. 
 // infact you can leave out the closing tag interms of the match.
 let reg2 = /<p>.*?<\/p>/g; // the '?' forces laziness, it back tracks earlier. 

 console.log(txt.match(reg1));
 console.log(txt.match(reg2));