-- Materiales(Clave, Descripción, Costo)
-- Proveedores(RFC, RazonSocial)
-- Proyectos(Numero,Denominacion)
-- Entregan(Clave, RFC, Numero, Fecha, Cantidad)

/* Consulta de un tabla completa

Algebra relacional.
materiales

SQL */
select * from materiales

/* clave	
descripcion	
precio	
impuesto	
	
Edit Edit
Copy Copy
Delete Delete
1000
Varilla 3/16
100
10
	
Edit Edit
Copy Copy
Delete Delete
1010
Varilla 4/32
115
11.5
	
Edit Edit
Copy Copy
Delete Delete
1020
Varilla 3/17
130
13

 45 Lineas */

/* Selección

Algebra relacional.
SL{clave=1000}(materiales)

 SQL */
SELECT * FROM materiales
WHERE clave=1000

/*clave
descripcion
precio
impuesto
	
Edit Edit
Copy Copy
Delete Delete
1000
Varilla 3/16
100
10

1 Linea */

/* Proyección

Algebra relacional.
PR{clave,rfc,fecha} (entregan)

SQL*/
SELECT clave,rfc,fecha FROM entregan
	
/* clave	
rfc	
fecha	
	
Edit Edit
Copy Copy
Delete Delete
1000
AAAA800101
2001-12-13
	
Edit Edit
Copy Copy
Delete Delete
1000
AAAA800101
1999-07-13
	
Edit Edit
Copy Copy
Delete Delete
1010
BBBB800101
1998-07-2 

87 Lineas*/

/*
Reunión Natural

Algebra relacional.
entregan JN materiales

SQL*/
SELECT * FROM materiales,entregan
WHERE materiales.clave = entregan.clave

/* clave
descripcion
precio
impuesto
clave
rfc
numero
fecha
cantidad
1000
Varilla 3/16
100
10
1000
AAAA800101
5000
2001-12-13
165
1000
Varilla 3/16
100
10
1000
AAAA800101
5019
1999-07-13
254

87 Lineas 


Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta?
No, ya que en esta consulta solamente se recuperan los registros que tienen una clave en común en ambas tablas, 
por lo que si no hay una clave en común, no se recuperará ningún registro de la tabla materiales.
*/

/*
Reunión con criterio específico

Algebra relacional.
entregan JN{entregan.numero <= proyectos.numero} proyectos

SQL*/
SELECT * FROM entregan,proyectos
WHERE entregan.numero <= proyectos.numero

/* clave
rfc
numero
fecha
cantidad
numero
denominacion
1000
AAAA800101
5000
2001-12-13
165
5000
Vamos Mexico
1200
EEEE800101
5000
2003-03-15
177
5000
Vamos Mexico
1400
AAAA800101
5000
1999-04-07
382
5000
Vamos Mexico

87 Lineas */

/*
Unión (se ilustra junto con selección)

Algebra relacional.
SL{clave=1450}(entregan) UN SL{clave=1300}(entregan)

SQL */
(SELECT * FROM entregan WHERE clave=1450)
UNION
(SELECT * FROM entregan WHERE clave=1300)

/*
clave	
rfc	
numero	
fecha	
cantidad	
1300
GGGG800101
5005
2004-02-28
521
1300
GGGG800101
5010
2001-02-10
119

2 Lineas 


¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
SELECT * FROM entregan WHERE clave IN (1450, 1300)
*/

/*
Intersección (se ilustra junto con selección y proyección)

Algebra relacional.
PR{clave}(SL{numero=5001}(entregan)) IN PR{clave}(SL{numero=5018}(entregan))

SQL
Nota: Debido a que en SQL server no tiene definida alguna palabra reservada que nos permita hacer esto de una manera entendible, veremos esta sección en el siguiente laboratorio con el uso de Subconsultas. Un ejemplo de un DBMS que si tiene la implementación de una palabra reservada para esta función es Oracle, en él si se podría generar la consulta con una sintaxis como la siguiente:
*/
(SELECT clave FROM entregan WHERE numero=5001)
INTERSECT
(SELECT clave FROM entregan WHERE numero=5018)

/* clave
1010

1 Linea */

/*
Diferencia (se ilustra con selección )

Algebra relacional.
entregan - SL{clave=1000}(entregan)

SQL*/
(SELECT * FROM entregan)
minus
(SELECT * FROM entregan where clave=1000)

/*
clave	
rfc	
numero	
fecha	
cantidad	
	
Edit Edit
Copy Copy
Delete Delete
1010
BBBB800101
5001
1998-07-28
528
	
Edit Edit
Copy Copy
Delete Delete
1010
BBBB800101
5018
1997-02-09
523
	
Edit Edit
Copy Copy
Delete Delete
1020
CCCC800101
5002
2003-12-16
582

85 Lineas

Nuevamente, "minus" es una palabra reservada que no está definida en SQL Server, define una consulta que regrese el mismo resultado.
SELECT * FROM entregan WHERE clave <> 1000
*/

/*

Producto cartesiano

Algebra relacional.
entregan X materiales

SQL */
SELECT * 
FROM entregan, materiales;

/* clave
rfc
numero
fecha
cantidad
clave
descripcion
precio
impuesto
1000
AAAA800101
5000
2001-12-13
165
1000
Varilla 3/16
100
10
1000
AAAA800101
5000
2001-12-13
165
1010
Varilla 4/32
115
11.5
1000
AAAA800101
5000
2001-12-13
165
1020
Varilla 3/17
130
13

ESTE QUERRY ESTA MAL, YA QUE NO DESPLIEGA CORRECTAMENTE LAS TABLAS, INCLUSO NO SE MUESTRA EL
NUMERO DE TABLAS DESPLEGADAS EN LA CONSULTA, PERO SI SE MUESTRAN LOS DATOS DE LAS TABLAS.

EN DADO CASO DE QUE QUIERA CORREGIR ESTE ERROR Y DESPLEGAR LOS ELEMENTOS QUE SE CRUZAN CON LA MISMA CLAVE, 
SE TENDRIA QUE UTILIZAR EL SIGUIENTE QUERRY:

*/
SELECT *
FROM entregan
JOIN materiales
ON entregan.clave = materiales.clave;

/*
clave
rfc
numero
fecha
cantidad
clave
descripcion
precio
impuesto
1000
AAAA800101
5000
2001-12-13
165
1000
Varilla 3/16
100
10
1000
AAAA800101
5019
1999-07-13
254
1000
Varilla 3/16
100
10
1010
BBBB800101
5001
1998-07-28
528
1010
Varilla 4/32
115
11.5

87 Lineas

¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
El número de tuplas de este resultado es igual al número de tuplas de entregan multiplicado por el número de tuplas de materiales.
 */

/*
 Construcción de consultas a partir de una especificación

Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.

Recuerda que la fecha puede indicarse como '01-JAN-2000' o '01/01/00'.

Importante: Recuerda que cuando vayas a trabajar con fechas, antes de que realices tus consultas debes ejecutar la instrucción "set dateformat dmy". Basta con que la ejecutes una sola vez para que el manejador sepa que vas a trabajar con ese formato de fechas.
*/
SELECT descripcion
FROM entregan, materiales
WHERE entregan.clave = materiales.clave AND YEAR(STR_TO_DATE(fecha, '%y/%m/%d')) = 2000 OR YEAR(STR_TO_DATE(fecha, '%d-%m-%y')) = 2000;


/* ¿Por qué aparecen varias veces algunas descripciones de material? 
Porque no se ha puesto la cláusula DISTINCT, por lo que se muestran todas las tuplas que cumplen con la condición. O en su
defecto la cláusula GROUP BY, que agrupa las tuplas que cumplen con la condición.
*/

