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

function contador(arr) {
    let neg = 0;
    let cero = 0;
    let pos = 0;
    for(let i=0;arr.length>i;i++) {
        if(arr[i]<0) {
            neg++;
        };
        if(arr == 0) {
            cero ++;
        };
        if(arr[i]>0) {
            pos++;
        };
    };
    return neg + " " + cero + " " + pos;
};
let arr = [7, 23, -6, 0, 3, 0];
let tot = contador(arr);
document.write( "<br><br>" +
"Arreglo de numeros: " + arr + "<br>" +
"La cantidad de numeros negativos es: " + tot[0] + "<br>" +
"La cantidad de numeros cero es: " + tot[2] + "<br>" +
"La cantidad de numeros positivos es: " + tot[4] + "<br>");



function promedio(arrNum) {
    for (let i = 0; i < arrNum.length; i++) {
        for (let j = 0; j < arrNum[i].length; j++) {
            row += arrNum[i][j];
        };
        if(i == 0) {
            promedio1 = row/arrNum[i][j].length
        };
        if(i == 1) {
            promedio2 = row/arrNum[i][j].length
        };
        if(i == 2) {
            promedio3 = row/arrNum[i][j].length
        };
    };
    return promedio1 + " " + promedio2 + " " + promedio3;
};

let list = [[1, 2, 3], [5, 6, 7], [9, 10, 11]];
let prom = promedio(list);
document.write( "<br><br>" +
"Matriz utilizada: " + list + "<br>" +
"Promedio de la primer fila: " + prom[0] + "<br>" +
"Promedio de la segunda fila: " + prom[2] + "<br>" +
"Promedio de la tercera fila: " + prom[4] + "<br>");


function inverso(num) { 

}