var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var filePath = '.' + req.url;

    if (filePath == './') {
        filePath = './index3.html';
    }
  
    fs.readFile(filePath, function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(data, 'UTF-8');
    });
}).listen(8080);
console.log('Server is running');