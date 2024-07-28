const readline = require("readline-sync");

function countWords(sentence) {
    const cleanedSentence = sentence.replace(/[^\w\s]/gi, '').toLowerCase();
    const words = cleanedSentence.split(/\s+/);
    const wordCount = {};

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    return wordCount;
}

function main() {
    const sentence = readline.question("Please enter a sentence: ");
    const wordCount = countWords(sentence);

    for (const word in wordCount) {
        console.log(`${word}: ${wordCount[word]}`);
    }
}

main();
