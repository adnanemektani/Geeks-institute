function Anagram(string1 , string2){
    const word1 = string1.toLowerCase().replace(/\s/g, "").split("").sort().join("")
    const word2= string2.toLowerCase().replace(/\s/g, "").split("").sort().join("")
    return word1===word2
}
console.log(Anagram("Astronomer", "Moon Starer"));