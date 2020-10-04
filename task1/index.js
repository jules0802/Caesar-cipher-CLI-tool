const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const encode = require('./encode');

const program = new Command();
program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file')
    .option('-a, --action <type>', 'encode/decode action')
    .parse(process.argv);

if (program.shift < 1 || program.shift > 26) console.error(new Error('Shift value must be between 1 and 26'));
else console.log(program.shift);

if (!program.action) console.error(new Error('Action must be provided'));
else  console.log(program.action);

if (program.output) {
    const output =  fs.createWriteStream(path.join(program.output), {
        flags: 'a'
      });
} else {
    const output = process.stdout;
}

if (program.input) {
    const input =  fs.createReadStream(path.join(program.input))
} else {
    const input = process.stdin;    
}

// pipeline(
//     input_stream, // input file stream or stdin stream
//     transform_stream, // standard Transform stream or https://github.com/rvagg/through2
//     output_stream // output file stream or stdout stream
//     )
//     .then()