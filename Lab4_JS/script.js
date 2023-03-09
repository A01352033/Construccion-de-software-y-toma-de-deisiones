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
document.getElementById("contador").innerHTML = "<br><br>" +
"Arreglo de numeros: " + arr + "<br>" +
"La cantidad de numeros negativos es: " + tot[0] + "<br>" +
"La cantidad de numeros cero es: " + tot[2] + "<br>" +
"La cantidad de numeros positivos es: " + tot[4] + "<br>";



function promedio(arrNum) {
    let promedio1 = 0;
    let promedio2 = 0;
    let promedio3 = 0;
    let sum = 0;
    let average = 0;
    for (let i = 0; i < arrNum.length; i++) {
        for (let j = 0; j < arrNum[i].length; j++) {
            sum += arrNum[i][j];
        };
        average = sum / arrNum[i].length;
        sum = 0;
        if(i == 0) {
            promedio1 = average;
        };
        if(i == 1) {
            promedio2 = average;
        };
        if(i == 2) {
            promedio3 = average;
        };
    };
    return promedio1 + " " + promedio2 + " " + promedio3;
};

let arrNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let prom = promedio(arrNum);
document.getElementById("promedio").innerHTML ="<br><br>" +
"Matriz utilizada: " + arrNum + "<br>" +
"Promedio de la primer fila: " + prom[0] + "<br>" +
"Promedio de la segunda fila: " + prom[2] + "<br>" +
"Promedio de la tercera fila: " + prom[4] + "<br>";


function inverso(numero) { 
    let num = numero.toString().split("").reverse().join("");
    return Number(num);
};

let num = 123456789;
let reversa = inverso(num);
document.getElementById("invertir").innerHTML = "<br><br>" +
    "Numero Seleccionado: " + num + "<br>" +
    "El numero invertido es: " + reversa + "<br>";

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    };
    // Getter
    get area() {
        return this.calcArea();
    };
    get perimetro() {
        return this.calcPer();
    };

    // Método
    calcArea () {
        return this.alto * this.ancho;
    };
    calcPer() {
        return this.alto*2 + this.ancho*2;
    };
};

document.getElementById("trapecio").innerHTML = "<br><br>" +
    "trapecio: <br>" +
    "alto: 7<br>" + "ancho: 2<br>"  +
    "El area del Rectangulo es: " + new Rectangulo(7,2).calcArea() + "<br>" +
    "El perimetro del Rectangulo es: " + new Rectangulo(7,2).calcPer() + "<br>";