const { ALPHABET, UPPER_ALPHABET } = require('./consts');

function encode(text, shift, isEncode) {
 
 return text.split('').map(char => {
    if (ALPHABET.includes(char)) {
        const index = ALPHABET.findIndex((letter) => letter === char );
        return isEncode 
        ? ALPHABET[(index + shift) % ALPHABET.length] 
        : ALPHABET[index - shift < 0 ? ALPHABET.length + (index - shift) : index - shift ];
    } else if (UPPER_ALPHABET.includes(char)) {
        const index = UPPER_ALPHABET.findIndex((letter) => letter === char );
        return isEncode 
        ? UPPER_ALPHABET[(index + shift) % ALPHABET.length] 
        : UPPER_ALPHABET[index - shift < 0 ? ALPHABET.length + (index - shift) : index - shift];
    } else {
        return char;
    }
 }).join('');
}

module.exports = encode;