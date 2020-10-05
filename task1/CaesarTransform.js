const { Transform } = require('stream');

const encode = require('./encode');

class CaesarTransform extends Transform {
  constructor(options = {}, shift, action) {
    super(options);
    this.shift = +shift;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    try {
      callback(null, encode(chunk.toString(), this.shift, this.action === 'encode')); 
      this.push('\n');
    } catch (err) {
      callback(err)
    }             
  }
}

module.exports = CaesarTransform;