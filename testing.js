function capitalize(word) {
    let arr = [...word];
    let first = arr[0].toUpperCase();
    arr[0] = first;
    return arr.join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

class calculator {
    add = (a, b) => {
        return a + b;
    }
    subtract = (a, b) => {
        return a - b;
    }
    multiply= (a, b) => {
        return a * b;
    }
    divide = (a, b) => {
        return a / b;
    }
}

let Calculator = new calculator;

function caeserCipher(word, cipher = 1) {
    let scrambled = [];
    for (let i = 0; i < word.length; i++) {
        let num = word[i].charCodeAt();
        
        if ((65 <= num) && (num <= 90)) {
            num = cipherUpper(num, cipher);
        }
        if ((97 <= num) && (num <= 122)) {
            num = cipherLower(num, cipher);
        }
        let current = String.fromCharCode(num);
        scrambled.push(current);
    }
    return scrambled.join("");
}

function cipherUpper(num, cipher) {
    num = num + cipher;
    if (num > 90) {
        num = num - 26;
    }
    return num;
}

function cipherLower(num, cipher) {
    num = num + cipher;
    if (num > 122) {
        num = num - 26;
    }
    return num;
}



function analyzeArray(arr) {
    const sum = arr.reduce((first, second) => {return first + second});
    const length = arr.length;
    const average = sum / length;
    const min = arr.reduce((first, second) => {return Math.min(first, second)});
    const max = arr.reduce((first, second) => {return Math.max(first, second)});
    const finalArray = {
        average: average,
        min: min,
        max: max,
        length: length,
    }
    return finalArray;
}

module.exports = { capitalize, reverseString, Calculator, caeserCipher, analyzeArray };