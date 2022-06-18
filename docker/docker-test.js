const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0'; // сервер запустим на всех интерфейсах
const port = 3000;

const server = http.createServer((req, res) => {
  const sharedValue = fs.readFileSync('./shared/text.json');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World: ${sharedValue}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
