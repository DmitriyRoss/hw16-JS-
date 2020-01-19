const http = require('http'); 
http.createServer((req, res) => {
    if(req.url == '/data') {
        res.end(JSON.stringify( { name: 'SERGEI', lastName: 'SHAKHOV' }));
    }
    res.end('GO TO LOCALHOST:2000/data')
}).listen(2000, '127.0.0.1', () => console.log('Server is listening on port:' + 2000) );