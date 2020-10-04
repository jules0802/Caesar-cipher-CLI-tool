const ALPHABET = require('./consts');

function encode(text, shift, isEncode) {
 const UPPER_ALPHABET = ALPHABET.map( letter => letter.toUpperCase() );   
 return text.split('').map(char => {
    if (ALPHABET.includes(char)) {
        const index = ALPHABET.findIndex((letter) => letter === char );
        return isEncode ? ALPHABET[index + shift] : ALPHABET[index - shift];
    } else if (UPPER_ALPHABET.includes(char)) {
        const index = UPPER_ALPHABET.findIndex((letter) => letter === char );
        return isEncode ? UPPER_ALPHABET[index + shift] : UPPER_ALPHABET[index - shift];
    } else {
        return char;
    }
 }).join('');
}

module.exports = encode;