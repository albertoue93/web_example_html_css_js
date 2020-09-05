var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    var filePath = '.' + req.url;

    if (filePath == './') {
        filePath = './index2.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(err, data) {
        res.writeHead(200, { 'Content-Type': contentType });
        return res.end(data, 'UTF-8');
    });
}).listen(8080);
console.log('Server is running');