function table() {
    let num = window.prompt("Inserta un numero");
    if (!isNaN(num)) {
        document.write("<table>");
        for(i=1;i<=num;i++) {
            document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
        };
        document.write("</table>");
        document.write("<br><button onclick='window.location.reload()'>Back</button>");
    }else{
        table();
    }
};

function suma() {
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    resultado = a+b;
    let inicio = Date.now();
    let num = window.prompt("Cual es el resultado de " + a + " + " + b );
    if (!isNaN(num)){
        let fin = Date.now();
        if(resultado == num) {
            document.write("ES CORRECTO!! <br>");
            document.write("Tiempo de respuesta: " + ((fin - inicio)/1000) + " Segundos");
        } else {
            document.write("Demasiado complicado... intenta otra vez <br>");
            document.write("Tiempo de respuesta: " + ((fin - inicio)/1000) + " Segundos");
        };
        document.write("<br><button onclick='window.location.reload()'>Back</button>");
    };
};

