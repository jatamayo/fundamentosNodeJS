const http = require('http');

http.createServer((request, response)=>{
    console.log('Nueva peticion');
    console.log(request.url);

    response.write('Hola mundo');
    response.writeHead(200, 'Hola mundo Cabecera');

    response.end();
}).listen(3000);

console.log("Server escuchando http puerto 3000");