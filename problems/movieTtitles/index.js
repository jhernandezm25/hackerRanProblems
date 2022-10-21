'use strict';

const fs = require('fs');
const https = require('https');
const axios = require('axios');

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
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=
 */

async function multiplesPages(url) {
    let movies = await axios.get(url)
    return movies.data
}
async function getMovieTitles(substr) {
    let url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`
    const moviesTitles = []
    let movies = await axios.get(url)
    if (movies.data) {
        const totalPages = movies.data.total_pages
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                url = `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}&page=${i}`
                movies = await axios.get(url)
                for (const title of movies.data.data) {
                    moviesTitles.push(title.Title)
                }
            }
        } else {
            for (const title of movies.data.data) {
                moviesTitles.push(title.Title)
            }
        }
    }

    return moviesTitles.sort()
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const _substr = readLine().trim();
    const results = await getMovieTitles(_substr);
    if (results.length > 0) {
        for (const result of results) {
            ws.write(`${result}\n`);
        }
    }

    ws.end();
}
