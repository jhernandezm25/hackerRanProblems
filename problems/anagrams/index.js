'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
    // Write your code here
    let words = text
    const finalWords = [];
    const isAnagram = (word) => {
        return finalWords.some(r => {
            if (r.length !== word.length) {
                return false
            }

            return word.split('').sort().toString() === r.split('').sort().toString();
        })
    }

    for (const word of text) {
        if (!finalWords.includes(word) && !isAnagram(word)) {
            finalWords.push(word)
        }
    }

    return finalWords.sort()

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const textCount = parseInt(readLine().trim(), 10);

    let text = [];

    for (let i = 0; i < textCount; i++) {
        const textItem = readLine();
        text.push(textItem);
    }

    const result = funWithAnagrams(text);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
