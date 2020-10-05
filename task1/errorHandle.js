function errorHandle(error) {
  if (error) {
    process.stderr.write(error.message + '\n');
    process.exit(1);
  }
}

module.exports = errorHandle;