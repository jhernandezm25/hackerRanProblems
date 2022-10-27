const historic = []
function processData(input) {
    const operations = input.split('\n')
    let word = ''
    historic.push(word)
    for (let i = 1; i< operations.length; i++) {
        let singleOperations = operations[i].split(' ')
        switch (singleOperations[0]) {
           case '1':
            word = append(word,singleOperations[1])
            historic.push(word)
            break
           case '2':
            word = deleteLetters(word,+singleOperations[1])
            historic.push(word)
            break;
           
           case '3':
            console.log(print(word,+singleOperations[1]))
            break;
            
           default:
           historic.pop()
           word = historic[historic.length-1]
            break;      
        }
    }
    
} 

function append(firstWord, appendWord) {
    return `${firstWord}${appendWord}`
}

function deleteLetters(word, numberOfCharacters) {
    const lastPostion = word.length - numberOfCharacters
    return word.substring(0,lastPostion)
}

function print(word, index) {
    return word.charAt(index-1)
}



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
