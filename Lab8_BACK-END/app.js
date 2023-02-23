console.log("hola desde node");


//El modulo filesystem surve para acceder al sistema de archivo de la computadora
const filesystem = require("fs");

filesystem.writeFileSync('hola.txt', 'hola desde node');


const arreglo = [5000, 60, 61, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Imprimir de manera asíncrona los elementos del arreglo (se imprimen en orden por su valor)
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

setTimeout(() => console.log("check mate!"), 15000);

// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Hot cakes</h1>");
    response.write("hola desde Node!");
    response.end();

});

server.listen(3000);