// ====== Daily Challenge Not Bad

let sentence = "My code Was not that bad, I like it now.";
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordBad > wordNot && wordNot !== -1) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}







// ====== Daily Challenge: Stars

for (let i = 1; i <=6; i++) {
    console.log("*".repeat(i));
}

//nested loop version

for (let i = 1; i <= 6; i++) {
    let stars = ""; 
    for (let j = 1; j <= i; j++) {
        stars += "*"; 
    }
    console.log(stars);
}


