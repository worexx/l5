const http = require('http');

const getFile = require('./utils/get-file');
const { info, warn, error } = require('./utils/logs');

const PORT = process.env.PORT || 9000
const image = './images/logo.gif'
const server = http.createServer();

server.on('request', (req, res) => {
  const fileStream = getFile(image);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/gif');
  fileStream.pipe(res);
})

info('Info: какая-то строка');
warn('Warn: какая-то строка');
error('Error: какая-то строка');

server.listen(PORT);