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
        
            <style>

            </style>
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
  } else if (request.url === "/preguntas") {
    response.setHeader("Content-Type", "text/html");
    let preguntas = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <title>Preguntas</title>
        </head>
        <body>
            <header>
                <nav class="#9e9e9e grey">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo">M1000r</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/preguntas">Preguntas</a></li>
                            <li><a href="/ordenar">Ordenar</a></li>
                        </ul>
                    </div>
                </nav>
                <h2 style="display: flex; justify-content: center; font-size: 50px;">Preguntas</h2>
            </header>
        
            <div id="content" class"container">
                <ul>
                    <li>¿Cuál es la diferencia entre Internet y la World Wide Web?
                        <ul>
                            <li>El internet es una red de computadoras que funcionan como nodos que se conectan entre si, mientras que la www es un subdominio que sirve como una especie de almacen de páginas y aplicaciones web</li>
                        </ul>
                    </li>
                    <li>¿Cuáles son las partes de un URL?
                        <ul>
                            <li>Protocolo, subdominio, dominio, extensión, carpeta, recurso y parámetros</li>
                        </ul>
                    </li>
                    <li>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
                        <ul>
                            <li>GET: Consultar datos</li>
                            <li>HEAD: Conultar los headers de las requests</li>
                            <li>POST: Enviar datos</li>
                            <li>PUT: Cambiar o actualizar datos</li>
                            <li>PATCH: Cambios parciales</li>
                            <li>DELETE: Borrar datos</li>
                        </ul>
                    </li>
                    <li>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
                        <ul>
                            <li>
                                Si es para registrar cuenta se utiliza un post, mientras que para iniciar sesion se utiliza get 
                            </li>
                        </ul>
                    </li>
                    <li>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
                        <ul>
                            <li>GET</li>
                        </ul>
                    </li>
                    <li>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
                        <ul>
                            <li>Código 200 siginifica que todo ocurrio de la manera esperada</li>
                        </ul>
                    </li>
                    <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?
                        <ul>
                            <li>No, ya que el error 404 significa recurso no encontrado, por lo que puede que el usuario haya escrito mal la url o que la pagina a la que quiere acceder ya no exista</li>
                        </ul>
                    </li>
                    <li>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?
                        <ul>
                            <li>Si, ya que el codigo 500 siginifica error interno del servidor, es decir que algo de la parte del servidor no esta funcionande de la manera adecuada</li>
                        </ul>
                    </li>
                    <li>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.
                        <ul>
                            <li>Que ya no tiene soporte en la versiones mas recientes de html y que aun puedes llegar a utilizar pero no se recomienda, como type, scope, "u" y strike</li>
                        </ul>
                    </li>
                    <li>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
                        <ul>
                            <li>
                                HTML5 es el conunto de diferentes tecnologias como CSS y JS, mientras que HTML4 es solo HTML
                            </li>
                        </ul>
                    </li>
                    <li>¿Qué componentes de estructura y estilo tiene una tabla?
                        <ul>
                            <li>TABLE: Inicializa la tabla</li>
                            <li>TR: La filas de la tabla</li>
                            <li>TH: Encabezados de la tabla</li>
                            <li>TD: Casillas de la tabla</li>
                            <li>En HTML5 Se introdujeron las etiquetas de thead, tbody y tfoot</li>
                        </ul>
                    </li>
                    <li>¿Cuáles son los principales controles de una forma HTML5?
                        <ul>
                            <li>
                                Inputs, que pueden ser desde texto, checkbox, selectores, radios y los botones
                            </li>
                        </ul>
                    </li>
                    <li>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo:<a href="http://html5test.com/" target="_blank">http://html5test.com/</a> (Al responder la pregunta recuerda poner el navegador que utilizas)
                        <ul>
                            <li>
                                En navegador chrome 473 de 555 puntos
                            </li>
                        </ul>
                    </li>
                    <li><strong>Sobre el ciclo de vida y desarrollo de los sistemas de información:</strong>
                        <ul>
                            <li>¿Cuál es el ciclo de vida de los sistemas de información?</li>
                            <li><img src="./assets/ciclo.jpg" alt="" style="width: 400px;"></li>
                        </ul>
                    </li>
                </ul>
                <br><br>
            </div>
        
            <footer class="page-footer #9e9e9e grey">
                <div class="container">
                    <div class="row">
                        <div class="col l5 s12">
                            <h5 class="white-text">M1000r</h5>
                            <p class="grey-text text-lighten-4">Especificaciones tecnicas</p>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Navegacion</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/">Inicio</a></li>
                                <li><a class="grey-text text-lighten-3" href="/preguntas">Preguntas</a></li>
                                <li><a class="grey-text text-lighten-3" href="/ordenar">Ordenar</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Editor</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Contacto</h5>
                            <ul>
                                <li>Manuel Villalpando Linares</li>
                                <li>A01352033</li>
                                <li><a class="grey-text text-lighten-3" href="mailto:A01709449@tec.mx">A01709449@tec.mx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </body>
        </html>`;
    response.write(preguntas);
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
