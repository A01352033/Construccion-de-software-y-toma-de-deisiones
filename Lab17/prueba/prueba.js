const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tacos',
    password: '',
});

conexion.connect(function(error) {
    if (error){ 
        throw error;
    }else{
    console.log("Conectado a la base de datos");
    }
});

conexion.end();