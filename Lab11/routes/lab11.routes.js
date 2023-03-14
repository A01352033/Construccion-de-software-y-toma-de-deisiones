const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lab 10</title>
    </head>
    
    <body>
    <header>
    <h1>Tacos EL CARNAL...</h1> <h2> Desde 2022</h2>
</header>
<img src="Tacos EL CARNAL.png" alt="Logo TACOS EL CARNAL">

<section>
    <h3>Menú </h3>
    <h3>Tacos grandes </h3>
    <p>Todos incluyen nopales y cebollas asadas</p>
    <ul>
        <li> Bisteck ........................ $30</li>
        <li> Pastor ........................ $30</li>
        <li> Chorizo ........................ $30</li>
        <li> Asada ........................ $30</li>
        <li> CARNITAS ........................ $30</li>
    </ul>
    
    <h3>Tacos pequeños </h3>
    <p>Todos incluyen verdura</p>
    <ul>
        <li> Bisteck ........................ $15</li>
        <li> Pastor ........................ $15</li>
        <li> Chorizo ........................ $15</li>
        <li> Asada ........................ $15</li>
        <li> CARNITAS ........................ $15</li>
    </ul>
    
    <h3>ESPECIALES </h3>
    <p>Hazlo combo y agrega refresco por $10 más...</p>
    <dl>
        <dt> <b>El Labrador........................ $50</b></dt>
        <dd> Descripcion breve </dd>
        <dt> <b> Pastor alemán........................ $50</b></dt>
        <dd> Descripcion breve </dd>
        <dt> <b>El Pug........................ $50</b></dt>
        <dd> Descripcion breve </dd>
        <dt> <b>El Adoptado........................ $50</b></dt>
        <dd> Descripcion breve </dd>
    </dl>
</section>

<section>
    <h2>Ubicación </h2>
    <h3>Sucursales</h3>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Ubicacióm</th>
            <th>Horarios</th>
        </tr>
        <tr>
            <td>Centro</td>
            <td><a href="https://goo.gl/maps/u6CniAqj9HBXdpDv9" target="_blank">Blvd. Bernardo Quintana 4113, San Pablo Tecnologico, 76160 Santiago de Querétaro, Qro.</a></td>
            <td>L - D (24 hrs)</td>
        </tr>
        <tr>
            <td>Sur</td>
            <td><a href="https://goo.gl/maps/u6CniAqj9HBXdpDv9" target="_blank">Blvd. Bernardo Quintana 4113, San Pablo Tecnologico, 76160 Santiago de Querétaro, Qro.</a></td>
            <td>L - V (8 am - 11 pm)</td>
        </tr>
        <tr>
            <td>Norte</td>
            <td><a href="https://goo.gl/maps/u6CniAqj9HBXdpDv9" target="_blank">Blvd. Bernardo Quintana 4113, San Pablo Tecnologico, 76160 Santiago de Querétaro, Qro.</a></td>
            <td>L - D (24 hrs)</td>
        </tr>
    </table>
</section>

<hr>

<section>
<button onclick="window.location.href = 'https://www.facebook.com/Tacos-El-Carnal-100000000000000';">Facebook</button>
<br>
<br>
<a href="/ordenar">
<button>Pedir</button>
</a>
    </body>
    
    </html>`;
    response.send(html);
});

module.exports = router;