let http = require('http');

http.createServer((request,response)=>{
   response.write(" <h1> Create server works properly </h1>") ;
   response.end();
}).listen(5000);