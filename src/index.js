const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(encodedString) {
    const segments = encodedString.match(/.{10}/g); // Split into 10-character segments
    let decodedString = "";

    for (const segment of segments) {
        if (segment === '**********') {
            decodedString += ' ';
        }
        else {
            const decodedSegment = segment.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
            decodedString += MORSE_TABLE[decodedSegment];
        }
    }
    return decodedString;
}

module.exports = {
    decode
}
