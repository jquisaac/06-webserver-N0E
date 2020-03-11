const http = require('http');

/**
 * Creamos el servidor
 */
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Isaac',
            edad: 30,
            url: req.url //URL Que solicita el usuario
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el purto 8080');