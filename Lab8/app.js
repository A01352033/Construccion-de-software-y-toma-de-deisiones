console.log("hola desde node");


//El modulo filesystem surve para acceder al sistema de archivo de la computadora
const filesystem = require("fs");

filesystem.writeFileSync('hola.txt', 'hola desde node');