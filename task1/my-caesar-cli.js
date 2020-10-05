const { Command } = require('commander');
const { pipeline } = require('stream');

const CaesarTransform = require('./CaesarTransform');
const errorHandle = require('./errorHandle');
const { validateArgs, getInputStream, getOutputStream } = require('./helpers');

const program = new Command();

program
  .storeOptionsAsProperties(true);

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .requiredOption('-a, --action <type>', 'encode/decode action')
  .parse(process.argv);

validateArgs(program);

pipeline(
  getInputStream(program),
  new CaesarTransform({}, program.shift, program.action),
  getOutputStream(program),    
  (err) => {
   if (err) errorHandle(new Error ('Somethig went wrong! Read the documentation for more information. '))
  }
);


