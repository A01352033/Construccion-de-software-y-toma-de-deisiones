const filesystem = require("fs");
const http = require("http");

// link a proyecto anterior

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    let html = `
        <!DOCTYPE html>
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
    response.write(html);
    response.end();

  } else if (request.url === "/ordenar" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
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
                <form action="/ordenar" method="POST">
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
            <a href="/">
            <button>Back</button>
            </a>
        
        </body>
        </html>`;

    response.write(ordenar);
    response.end();
  } else if (request.url === "/ordenar" && request.method === "POST") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        let bodySplit = body.split("&");
        let bisteck = bodySplit[0].split("=")[1];
        let pastor = bodySplit[2].split("=")[1];
        let chorizo = bodySplit[4].split("=")[1];
        let asada = bodySplit[6].split("=")[1];
        let nombre = bodySplit[7].split("=")[1];
        let direccion = bodySplit[8].split("=")[1];
        let orden = `Tacos de bisteck: ${bisteck} \nTacos de pastor: ${pastor} \Tacos de chorizo: ${chorizo} \nTacos de asada: ${asada} \Nombre: ${nombre}  \nDireccion: ${direccion}`;
        filesystem.writeFileSync("orden.txt", orden);
        response.setHeader("Content-Type", "text/html");
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
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/preguntas">Preguntas</a></li>
                            <li><a href="/ordenar">Ordenar</a></li>
                        </div>
                        <div id="orden"></div>
                    </nav>
                    <main>
                        <div class="container">
                            <h1>Orden realizada</h1>
                            <p>Gracias por su compra</p>
                        </div>
                    </main>
                    <a href="/">
                    <button>Menú</button>
                    </a>
                    <a href="/ordenar">
                    <button>Pedir de nuevo</button>
                    </a>
            
            </body>
            </html>`;
        response.write(order);
        response.end();
      });
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Error 404 - Page not found</h1>");
    response.end();
  }
});
server.listen(3000);
