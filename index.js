var sander = require('sander');

module.exports = function forcecopy(inputdir, outputdir, options) {
  return sander.copydir(inputdir).to(outputdir);
};
