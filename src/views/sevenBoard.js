import wordBank from "../components/seven_letter_dict.txt";
export const boardDefault =[
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
]
export const generatorWordSet = async () =>{
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
    .then ((response) => response.text())
    .then ((result) => {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random()*wordArr.length)];
        wordSet = new Set(wordArr);
    });
    return {wordSet,todaysWord};
}