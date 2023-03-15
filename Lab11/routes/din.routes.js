const express = require('express');
const router = express.Router();
const filesystem = require('fs');

router.get('/ordenar', (request, response, next) => {
    let ordenar = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>EL CARNAL</title>
        </head>
        <body>
                <h2>Pedidos </h2>
                
                <h3>Haz tu pedido aqui...</h3>
                <form action="/Lab11/ordenar" method="POST">
                    <p>De qué taquería quieres?</p>
                    <select>
                        <option value="Norte">Norte</option>
                        <option value="Centro">Centro</option>
                        <option value="Sur">Sur</option>
                    </select>
                    
                    <p>De qué tacos quieres?</p>
                    <input type="checkbox" id="Bisteck" name="Bisteck" value="Bisteck">
                    <label for="Bisteck">Bisteck</label>
                    <input type="number" id="BisteckNumber" name="BisteckNumber" placeholder="Cuantos?" min="0"><br>
                    
                    <input type="checkbox" id="Pastor" name="Pastor" value="Pastor">
                    <label for="Pastor">Pastor</label>
                    <input type="number" id="PasorNumber" name="PasorNumber" placeholder="Cuantos?" min="0"><br>
                    
                    <input type="checkbox" id="Chorizo" name="Chorizo" value="Chorizo">
                    <label for="Chorizo">Chorizo</label>
                    <input type="number" id="ChorizoNumber" name="ChorizoNumber" placeholder="Cuantos?" min="0"><br>
                    
                    <input type="checkbox" id="Asada" name="Asada" value="Asada">
                    <label for="Asada">Asada</label>
                    <input type="number" id="AsadaNumber" name="AsadaNumber" placeholder="Cuantos?" min="0"><br>
                    
                    <br><br>
                    
                    <label for="Nombre">Nombre: </label><br>
                    <input type="text" id="Nombre" name="Nombre" > 
                    
                    <br><br>
                    
                    <label for="Dirección">Dirección: </label><br>
                    <input type="text" id="Dirección" name="Dirección" > 
                    
                    <br><br>
                    
                    <button type="submit" name="action">Enviar pedido</button>
                    
                    <br><br>
                </form>
            </section>
            <a href="/Lab11">
            <button>Back</button>
            </a>
        
        </body>
        </html>`;
    response.send(ordenar);
});

router.post('/ordenar', (request, response, next) => {
    let bisteck = request.body.bisteck;
    let pastor = request.body.pastor;
    let chorizo = request.body.chorizo;
    let asada = request.body.asada;
    let nombre = request.body.nombre;
    let direccion = request.body.direccion;
    let orden = `Tacos de bisteck: ${bisteck} \nTacos de pastor: ${pastor} \Tacos de chorizo: ${chorizo} \nTacos de asada: ${asada} \Nombre: ${nombre}  \nDireccion: ${direccion}`;
    filesystem.writeFileSync("orden.txt", orden);

    let order = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>EL CARNAL</title>
            </head>
            <body>
                <header>
                    <h1>Tacos EL CARNAL...</h1> <h2> Desde 2022</h2>
                </header>
                <img src="Tacos EL CARNAL.png" alt="Logo TACOS EL CARNAL">
            
                    <nav>
                        <div>
                            <li><a href="/Lab11">Inicio</a></li>
                            <li><a href="/Lab11/preguntas">Preguntas</a></li>
                            <li><a href="/din/ordenar">Ordenar</a></li>
                        </div>
                        <div id="orden"></div>
                    </nav>
                    <main>
                        <div class="container">
                            <h1>Orden realizada</h1>
                            <p>Gracias por su compra</p>
                        </div>
                    </main>
                    <a href="/Lab11">
                    <button>Menú</button>
                    </a>
                    <a href="/din/ordenar">
                    <button>Pedir de nuevo</button>
                    </a>
            
            </body>
            </html>`;
    response.send(order);
});

module.exports = router;