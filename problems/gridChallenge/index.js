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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    let test = []
    let orderwordT = ""
    let limit = grid[0].length
    let yes = true;
    for (const element of grid) {
        orderwordT += orderWord(element)
        test.push(orderWord(element))
    }
    console.log(test)
    for (let i = 0; i <= limit; i++) {
        for (let j = i + limit; j < orderwordT.length; j+=limit) {
            console.log('i',orderwordT.charAt(i))
            console.log('j',orderwordT.charAt(j))
            let first = alphaVal(orderwordT.charAt(i))
            let second = alphaVal(orderwordT.charAt(j))
            if (first > second) {
                yes = false
                console.log('NO')
                return 'NO'
            }
        }
    }
    if(yes){
        console.log('YES')
        return 'YES'
    }
    
}

const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1

function orderWord(word) {
    let myWord = word.split("")
    myWord = myWord.sort()
    myWord = myWord.join("")
    return myWord
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
