let http = require('http');
let d1= require('./data1');

http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type':'application\json'});
    resp.write(JSON.stringify((d1)));
    resp.end();
}).listen(5000);