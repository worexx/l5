const fs = require('fs');

const getFile = filePath => fs.createReadStream(filePath);

module.exports = getFile;