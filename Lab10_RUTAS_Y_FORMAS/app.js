const fs = require('fs');

const pag = require('http');

fs.readFile("../Lab3_CSS/index.html",  function (err, html) {
    if (err) {
        throw err; 
    }
    const server = pag.createServer((request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    })
    server.listen(3000);
});