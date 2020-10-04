const { Command } = require('commander');
const fs = require('fs');
const encode = require('./encode');


console.log(encode('def', 3, false));

const program = new Command();
program
    .version('0.0.1')
    .description('Caesar cipher CLI tool');