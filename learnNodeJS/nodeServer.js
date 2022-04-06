const fs  = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
     const url = req.url;
     if (url === '/') {
          res.write('<html>');
          res.write('<head><title>Enter message</title></head>');
          res.write('<body><form action="/message" method="POST"><input type="text" name="message">Submit</body>');
          res.write('</html>');
          return res.end();
     }
     if (url === '/message' && method === 'POST') {
          fs.writeFileSync('message.txt', 'DUMMY');
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
     }
     res.setHeader("Content-Type", 'text/html');
     res.write('<html>');
     res.write('<head><title>First page</title></head>');
     res.write('<body>hello from the node js server</body>');
     res.write('</html>');
     
});

server.listen(3000);
