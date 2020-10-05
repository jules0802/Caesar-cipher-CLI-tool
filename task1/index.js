const { Command } = require('commander');
const fs = require('fs');
//const path = require('path');
const { pipeline } = require('stream');

const CaesarTransform = require('./CaesarTransform');
const errorHandler = require('./errorHandler');

function runProgram (args) {
  const program = new Command();

  program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file')
    .option('-a, --action <type>', 'encode/decode action')
    .parse(args);

  let input, output;

  if (program.shift < 1 || program.shift > 26 || !program.shift) errorHandler(new Error('Shift value must be between 1 and 26'));
  if (!program.action) errorHandler(new Error('Action must be provided after -a or --action flag'));
  if (program.output) {
    output =  fs.createWriteStream(program.output, {
      flags: 'a+'
    });
  } else {
    output = process.stdout;
  }

  if (program.input) {
    input =  fs.createReadStream(program.input, 'utf8')
  } else {
    input = process.stdin;    
  }

  pipeline(
    input,
    new CaesarTransform({}, program.shift, program.action),
    output,    
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  );
};

module.exports = runProgram;

