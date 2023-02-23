
function prom (array) {
    let sum = 0;
    var b = array.length ;
 
    if(b == 0){
        return 0
    } else{
        for (let i = 0; i < b; i++) {
            sum = (sum + array[i]);
        }
        let prom = sum/b
        return prom
    }
}

console.log(prom([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(prom([]))


const fs = require('fs');

const pag = require('http');

fs.readFile("../Lab1_HTML/index.html",  function (err, html) {
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

