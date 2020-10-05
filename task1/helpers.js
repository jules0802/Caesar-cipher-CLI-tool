const fs = require('fs');

const errorHandle = require('./errorHandle');

function validateArgs({action, shift, input, output}) {
  if (typeof action === 'function' || !action || (action !=='encode' && action !=='decode')) {
    errorHandle(new Error('Action must be provided after -a or --action flag : encode/decode values'));
  }

  if (shift < 1 || shift > 26 || !shift) {
    errorHandle(new Error('Shift value must be between 1 and 26')); 
  } 

  if (output) {
      fs.access(output, fs.constants.F_OK | fs.constants.W_OK, (err) => {
      if (err) {
        errorHandle( new Error(`${output} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`));
      }
    });
  }

  if (input) {
    fs.access(input, fs.constants.F_OK, (err) => {
    if (err) errorHandle( new Error(`${input} does not exist`));
    });    
    fs.access(input, fs.constants.R_OK, (err) => {
      if (err) errorHandle( new Error(`${input} is not readable`));
    });
  }
}

function getOutputStream({output}) {
 return output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout;
}

function getInputStream({input}) {
  return input ? fs.createReadStream(input, 'utf8') : process.stdin;  
}

module.exports = {
  validateArgs,
  getInputStream,
  getOutputStream
};